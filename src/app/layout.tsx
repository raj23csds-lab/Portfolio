import type { Metadata, Viewport } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/components/theme-provider'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Rakshitha J | Portfolio - Computer Science & Data Science Engineer',
  description: 'Portfolio of Rakshitha J - Computer Science & Engineering (Data Science) Student at CMR Institute of Technology. Specializing in AI/ML, Python, and Full-Stack Development. CGPA: 8.68/10.',
  keywords: ['Rakshitha J', 'Portfolio', 'Computer Science', 'Data Science', 'Machine Learning', 'Python Developer', 'AI/ML', 'Full Stack Developer', 'CMRIT', 'Web Development', 'React', 'FastAPI'],
  authors: [{ name: 'Rakshitha J' }],
  creator: 'Rakshitha J',
  openGraph: {
    title: 'Rakshitha J | Computer Science & Data Science Portfolio',
    description: 'Computer Science & Engineering (Data Science) Student at CMR Institute of Technology. Specializing in AI/ML, Python, and Full-Stack Development. CGPA: 8.68/10.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Rakshitha J Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rakshitha J | Computer Science & Data Science Engineer',
    description: 'Specializing in AI/ML, Python, and Full-Stack Development. CGPA: 8.68/10.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rakshitha J',
    jobTitle: 'Software Engineer & Data Scientist',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'CMR Institute of Technology, Bangalore',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Full Stack Development',
      'Python',
      'FastAPI',
      'React',
      'Next.js',
      'Data Structures & Algorithms',
    ],
    url: 'https://github.com/raj23csds-lab',
    email: 'jvnrs125@gmail.com',
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('antialiased min-h-screen bg-background flex flex-col font-sans')} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="w-full bg-background flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
