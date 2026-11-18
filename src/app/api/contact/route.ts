import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter: max 5 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; lastReset: number }>()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now })
    return false
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true
  }

  record.count += 1
  return false
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, '').trim()
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown'

    // Rate limiting check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please wait a few minutes before sending another message.' 
        },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { name, email, subject, message, botcheck } = body

    // Honeypot anti-spam check
    if (botcheck) {
      return NextResponse.json(
        { success: true, message: 'Message sent successfully.' },
        { status: 200 }
      )
    }

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid name (at least 2 characters).' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    if (!message || typeof message !== 'string' || message.trim().length < 8) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 8 characters long.' },
        { status: 400 }
      )
    }

    const cleanName = sanitize(name)
    const cleanEmail = sanitize(email)
    const cleanSubject = subject ? sanitize(subject) : 'General Inquiry'
    const cleanMessage = sanitize(message)

    // Log the contact inquiry on the server
    console.log(`[Contact Form Received] [${new Date().toISOString()}] from ${cleanName} <${cleanEmail}> | Subject: "${cleanSubject}" | Length: ${cleanMessage.length}`)

    // If external Web3Forms key is present, forward it silently
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY
    if (web3formsKey) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3formsKey,
            name: cleanName,
            email: cleanEmail,
            subject: `Portfolio Contact: ${cleanSubject}`,
            message: cleanMessage,
            from_name: 'Rakshitha J Portfolio',
          }),
        })
      } catch (externalErr) {
        console.warn('External webhook notification non-critical error:', externalErr)
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been received. I will get back to you shortly.',
        data: {
          receivedAt: new Date().toISOString(),
          sender: cleanName,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing your message.' },
      { status: 500 }
    )
  }
}
