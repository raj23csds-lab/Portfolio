'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  Code2, 
  Copy, 
  Check, 
  Download,
  Sparkles,
  MessageSquare
} from 'lucide-react'
import Link from 'next/link'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [feedbackMsg, setFeedbackMsg] = useState<string>('')
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setFeedbackMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setFeedbackMsg(data.message || 'Thank you! Your message has been received.')
        setFormData({ name: '', email: '', subject: '', message: '', botcheck: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
        setFeedbackMsg(data.error || 'Failed to deliver message. Please try again or reach out directly.')
      }
    } catch (err) {
      console.error('Submission error:', err)
      setStatus('error')
      setFeedbackMsg('Network error while sending message. Please reach out directly to jvnrs125@gmail.com.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      id: 'personal-email',
      icon: Mail,
      label: 'Primary / Personal Email',
      value: 'jvnrs125@gmail.com',
      href: 'mailto:jvnrs125@gmail.com',
      copyValue: 'jvnrs125@gmail.com'
    },
    {
      id: 'academic-email',
      icon: Mail,
      label: 'Academic CMRIT Email',
      value: 'raj23csds@cmrit.ac.in',
      href: 'mailto:raj23csds@cmrit.ac.in',
      copyValue: 'raj23csds@cmrit.ac.in'
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+91 7899422347',
      href: 'tel:+917899422347',
      copyValue: '+917899422347'
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Current Residence',
      value: 'Vijinapura, Bangalore - 560016, Karnataka, India',
      href: null,
      copyValue: 'Vijinapura, Bangalore - 560016, Karnataka'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'rakshitha-j',
      href: 'http://www.linkedin.com/in/rakshitha-j-3b5b97352'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'raj23csds-lab',
      href: 'https://github.com/raj23csds-lab'
    },
    {
      icon: Code2,
      label: 'LeetCode',
      value: 'Rakshitha_J__',
      href: 'https://leetcode.com/u/Rakshitha_J__/'
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 relative bg-muted/20">
      <div className="container max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Actively looking for software engineering, AI/ML, and data science internships or full-time opportunities. Reach out anytime!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-foreground">Direct Reach</h3>
              
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <div
                    key={info.id}
                    className="p-3 rounded-xl border border-border/80 bg-secondary/30 flex items-center justify-between gap-3 hover:border-blue-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                        <info.icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-xs sm:text-sm font-semibold text-foreground hover:text-blue-600 dark:hover:text-blue-400 truncate block transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-xs sm:text-sm font-semibold text-foreground truncate">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy(info.copyValue, info.id)}
                      className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground shrink-0 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedKey === info.id ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Profiles & Resume */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-foreground">Coding & Professional Profiles</h3>
              
              <div className="grid grid-cols-3 gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border/80 bg-secondary/30 hover:border-blue-500/50 hover:bg-blue-500/5 text-center flex flex-col items-center justify-center gap-1.5 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-foreground">{social.label}</span>
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <Button asChild className="w-full gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-medium">
                  <Link href="/Rakshitha_J_Resume.pdf" target="_blank" download="Rakshitha_J_Resume.pdf">
                    <Download className="w-4 h-4" />
                    Download Complete Resume (PDF)
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-1">Send a Message</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                Have a job opening, internship opportunity, or question? Drop me a message and I will reply within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for bot protection */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Interview Invitation / Job Opportunity"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Message Details *
                    </label>
                    <span className="text-[11px] text-muted-foreground">
                      {formData.message.length} / 1000
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={1000}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                    placeholder="Hi Rakshitha, we were impressed with your portfolio and would love to discuss a Software / AI role..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-semibold py-3 shadow-md"
                >
                  {status === 'submitting' ? (
                    'Transmitting Message...'
                  ) : status === 'success' ? (
                    'Message Received! Thank You'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message via API
                    </>
                  )}
                </Button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-xs sm:text-sm text-green-600 dark:text-green-400 text-center font-medium"
                  >
                    🎉 {feedbackMsg}
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-destructive/10 border border-destructive/30 text-xs sm:text-sm text-destructive text-center font-medium"
                  >
                    ⚠️ {feedbackMsg}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

