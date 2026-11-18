'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Code, ArrowUp, Download } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border/80 bg-background/80 backdrop-blur-md py-12 px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          
          {/* Brand & Title */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-sm">
                R
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
                Rakshitha J
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
              Computer Science & Engineering (Data Science) • CMR Institute of Technology, Bengaluru
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/raj23csds-lab', label: 'GitHub' },
              { icon: Linkedin, href: 'http://www.linkedin.com/in/rakshitha-j-3b5b97352', label: 'LinkedIn' },
              { icon: Code, href: 'https://leetcode.com/u/Rakshitha_J__/', label: 'LeetCode' },
              { icon: Mail, href: 'mailto:jvnrs125@gmail.com', label: 'Email' },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 rounded-full border border-border/80 bg-secondary/50 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 flex items-center justify-center shadow-sm"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full border border-border/80 bg-secondary/50 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 flex items-center justify-center shadow-sm ml-2"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-muted-foreground text-center sm:text-left">
          <p>© {new Date().getFullYear()} Rakshitha J. All rights reserved.</p>
          <div className="flex items-center gap-3 justify-center">
            <span>Built with Next.js 16, TypeScript & Tailwind CSS</span>
            <span>•</span>
            <Link 
              href="/api/developer" 
              target="_blank" 
              className="text-blue-500 hover:text-blue-600 font-mono text-[11px] underline underline-offset-2"
            >
              Developer API
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

