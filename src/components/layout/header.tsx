'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Download, Menu, X, Moon, Sun, Sparkles, Search, Command } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { CommandMenu } from '@/components/ui/command-menu'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [commandOpen, setCommandOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100)
      }
    }
    const handleOpenPalette = () => setCommandOpen(true)

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('open-command-palette', handleOpenPalette)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('open-command-palette', handleOpenPalette)
    }
  }, [])

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled 
          ? 'border-b border-border/80 bg-background/85 backdrop-blur-xl shadow-sm' 
          : 'border-b border-border/40 bg-background/60 backdrop-blur-md'
      }`}>
        {/* Real-time reading progress bar */}
        <div 
          className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 transition-all duration-150 ease-out z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="container flex h-16 items-center px-4 mx-auto max-w-7xl justify-between">
          
          {/* Brand / Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center font-black text-white text-base shadow-md group-hover:scale-105 transition-transform">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent leading-none">
                  Rakshitha J
                </span>
                <span className="text-[10px] text-muted-foreground font-medium hidden sm:block">
                  CS & Data Science • CMRIT
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 text-xs font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/75 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Command Palette Button */}
            <button
              onClick={() => setCommandOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-border/80 bg-secondary/30 hover:bg-secondary hover:border-blue-500/50 text-muted-foreground hover:text-foreground text-xs font-medium transition-all shadow-xs"
              title="Quick Actions & CLI Terminal (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-blue-500" />
              <span className="hidden md:inline">Quick Actions</span>
              <kbd className="hidden sm:inline-flex items-center text-[10px] font-mono px-1 py-0.2 rounded bg-background border border-border text-muted-foreground">
                ⌘K
              </kbd>
            </button>

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-full w-9 h-9 border border-border/70"
                aria-label="Toggle theme"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            <Button asChild size="sm" className="hidden sm:flex gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium shadow-sm">
              <Link href="/Rakshitha_J_Resume.pdf" target="_blank" download="Rakshitha_J_Resume.pdf">
                <Download className="h-3.5 w-3.5" />
                <span>Resume</span>
              </Link>
            </Button>
            
            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 rounded-lg border border-border/70 hover:bg-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-2xl">
            <nav className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold py-2.5 px-3 rounded-lg hover:bg-secondary hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-border flex flex-col gap-2">
                <Button 
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setCommandOpen(true)
                  }}
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 font-medium"
                >
                  <Search className="h-4 w-4 text-blue-500" />
                  Open Quick Actions & Terminal (⌘K)
                </Button>
                <Button asChild size="sm" className="w-full gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium">
                  <Link href="/Rakshitha_J_Resume.pdf" target="_blank" download="Rakshitha_J_Resume.pdf" onClick={() => setMobileMenuOpen(false)}>
                    <Download className="h-4 w-4" />
                    Download Resume (PDF)
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Global Command Menu & Dev CLI */}
      <CommandMenu
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
      />
    </>
  )
}

