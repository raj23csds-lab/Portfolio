'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Terminal, 
  FileText, 
  Mail, 
  Moon, 
  Sun, 
  Github, 
  Linkedin, 
  Code2, 
  ExternalLink, 
  X, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

interface CommandMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState('')
  const [terminalOutput, setTerminalOutput] = useState<string[]>([])
  const [copied, setCopied] = useState(false)
  const { theme, setTheme } = useTheme()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
      setTerminalOutput([])
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        } else {
          // Open menu via trigger
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jvnrs125@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleTerminalCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    let response = ''

    switch (trimmed) {
      case 'help':
        response = 'Available commands: about, skills, projects, cgpa, contact, github, linkedin, hire, clear'
        break
      case 'about':
        response = 'Rakshitha J - CS & Data Science undergrad at CMRIT Bangalore. Focus on AI/ML, RAG, Python, and Full-Stack systems.'
        break
      case 'skills':
        response = 'Core Stack: Python, Java, TypeScript, FastAPI, React/Next.js, SQL, Scikit-Learn, XGBoost, LangChain, FAISS'
        break
      case 'projects':
        response = 'Featured: 1) Metro Journey Tracker (Dijkstra algorithm), 2) CampusQuant AI (Placement predictor & WebRTC), 3) AI PDF Assistant (RAG + FAISS), 4) Medicine Recommendation'
        break
      case 'cgpa':
        response = 'Academic Score: 8.68 / 10 CGPA (B.E. Computer Science & Engineering - Data Science, 2023-2027)'
        break
      case 'contact':
      case 'hire':
        handleCopyEmail()
        response = 'Copied jvnrs125@gmail.com to clipboard! Ready to collaborate.'
        break
      case 'clear':
        setTerminalOutput([])
        setQuery('')
        return
      default:
        response = `Command not recognized: "${cmd}". Type "help" for a list of commands.`
    }

    setTerminalOutput(prev => [...prev, `$ ${cmd}`, response])
    setQuery('')
  }

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.startsWith('>')) {
      e.preventDefault()
      handleTerminalCommand(query.slice(1).trim())
    }
  }

  if (!isOpen) return null

  const navigationItems = [
    { label: 'Home / Hero', href: '#home', tag: 'Section' },
    { label: 'About Me & Background', href: '#about', tag: 'Section' },
    { label: 'Technical Skills Matrix', href: '#skills', tag: 'Section' },
    { label: 'Engineering Projects', href: '#projects', tag: 'Section' },
    { label: 'Experience & Leadership', href: '#experience', tag: 'Section' },
    { label: 'Awards & Hackathons', href: '#achievements', tag: 'Section' },
    { label: 'Certifications', href: '#certifications', tag: 'Section' },
    { label: 'Education & Academics', href: '#education', tag: 'Section' },
    { label: 'Contact & Inquiry', href: '#contact', tag: 'Section' },
  ]

  const filteredNav = navigationItems.filter(item => 
    item.label.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-card border border-border/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        >
          {/* Header Input */}
          <div className="p-4 border-b border-border flex items-center gap-3 bg-secondary/20">
            <Search className="w-5 h-5 text-muted-foreground shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDownInput}
              placeholder="Search sections or type '>help' for CLI terminal mode..."
              className="w-full bg-transparent border-none text-foreground placeholder:text-muted-foreground focus:outline-none text-sm sm:text-base font-medium"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="p-1 rounded-md hover:bg-secondary text-muted-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-muted-foreground bg-secondary rounded border border-border">
              ESC
            </kbd>
            <button 
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-secondary text-muted-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-4 overflow-y-auto space-y-4">
            
            {/* Terminal Command Output if any */}
            {terminalOutput.length > 0 && (
              <div className="p-3 rounded-xl bg-black/90 font-mono text-xs text-green-400 space-y-1 border border-border">
                <div className="flex items-center justify-between text-muted-foreground pb-1 border-b border-zinc-800 text-[10px]">
                  <span>PORTFOLIO_DEV_SHELL v2.0</span>
                  <button 
                    onClick={() => setTerminalOutput([])} 
                    className="hover:text-white"
                  >
                    Clear
                  </button>
                </div>
                {terminalOutput.map((line, idx) => (
                  <div key={idx} className={line.startsWith('$') ? 'text-blue-400 font-bold' : 'text-zinc-200 pl-2'}>
                    {line}
                  </div>
                ))}
              </div>
            )}

            {/* Quick Actions Bar */}
            <div>
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
                Quick Shortcuts
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl border border-border bg-secondary/30 hover:border-blue-500/50 hover:bg-blue-500/5 text-left flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="text-xs font-semibold truncate">
                    {copied ? 'Copied Email!' : 'Copy Email'}
                  </span>
                </button>

                <a
                  href="/Rakshitha_J_Resume.pdf"
                  target="_blank"
                  download="Rakshitha_J_Resume.pdf"
                  className="p-2.5 rounded-xl border border-border bg-secondary/30 hover:border-blue-500/50 hover:bg-blue-500/5 text-left flex items-center gap-2 transition-colors"
                >
                  <FileText className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-xs font-semibold truncate">Download CV</span>
                </a>

                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2.5 rounded-xl border border-border bg-secondary/30 hover:border-blue-500/50 hover:bg-blue-500/5 text-left flex items-center gap-2 transition-colors"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-500 shrink-0" />
                  ) : (
                    <Moon className="w-4 h-4 text-blue-400 shrink-0" />
                  )}
                  <span className="text-xs font-semibold truncate">Toggle Theme</span>
                </button>

                <button
                  onClick={() => {
                    setQuery('>help')
                    handleTerminalCommand('help')
                  }}
                  className="p-2.5 rounded-xl border border-border bg-secondary/30 hover:border-blue-500/50 hover:bg-blue-500/5 text-left flex items-center gap-2 transition-colors"
                >
                  <Terminal className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs font-semibold truncate">Run CLI Mode</span>
                </button>
              </div>
            </div>

            {/* Navigation Filter List */}
            <div>
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
                Portfolio Sections ({filteredNav.length})
              </div>
              <div className="space-y-1">
                {filteredNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-secondary/70 text-foreground text-sm font-medium transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                      <span>{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                        {item.tag}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                    </div>
                  </Link>
                ))}

                {filteredNav.length === 0 && (
                  <div className="text-center py-6 text-sm text-muted-foreground">
                    No section matches "{query}". Press <kbd className="px-1.5 py-0.5 text-xs bg-secondary rounded border border-border">Enter</kbd> to execute as command.
                  </div>
                )}
              </div>
            </div>

            {/* External Links */}
            <div>
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">
                External Profiles
              </div>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://github.com/raj23csds-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl border border-border hover:bg-secondary/50 text-xs font-medium"
                >
                  <Github className="w-4 h-4" />
                  <span className="truncate">GitHub</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground" />
                </a>

                <a
                  href="http://www.linkedin.com/in/rakshitha-j-3b5b97352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl border border-border hover:bg-secondary/50 text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4 text-blue-500" />
                  <span className="truncate">LinkedIn</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground" />
                </a>

                <a
                  href="https://leetcode.com/u/Rakshitha_J__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl border border-border hover:bg-secondary/50 text-xs font-medium"
                >
                  <Code2 className="w-4 h-4 text-amber-500" />
                  <span className="truncate">LeetCode</span>
                  <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground" />
                </a>
              </div>
            </div>

          </div>

          {/* Footer Info */}
          <div className="p-3 border-t border-border bg-secondary/10 flex items-center justify-between text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Portfolio Command Hub Active
            </span>
            <div className="hidden sm:flex items-center gap-2 font-mono">
              <span>Type <code className="text-blue-500">&gt;cmd</code> for terminal</span>
              <span>•</span>
              <span>Press <kbd className="px-1 py-0.5 rounded bg-secondary border border-border">Ctrl+K</kbd> anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
