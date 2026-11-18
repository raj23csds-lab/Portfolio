'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Code2, 
  Sparkles, 
  Code, 
  CheckCircle2, 
  Award, 
  Lightbulb, 
  Copy, 
  Check,
  Terminal 
} from 'lucide-react'

export function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jvnrs125@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 py-12 sm:py-16 md:py-20">
      {/* Dynamic Animated Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -35, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -left-10 w-96 h-96 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Content) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status / Opportunity Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/25 text-blue-600 dark:text-blue-400 mx-auto lg:mx-0 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                Seeking Software, AI/ML & Data Engineering Roles
              </span>
            </motion.div>

            {/* Main Greeting & Title */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground font-medium text-base sm:text-lg flex items-center justify-center lg:justify-start gap-2"
              >
                <span>Hello, World!</span>
                <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
                <span>I'm</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
                  Rakshitha J
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-foreground/90"
              >
                <Code2 className="w-5 h-5 text-blue-500 shrink-0" />
                <p className="text-lg sm:text-xl font-semibold">
                  Computer Science & Engineering (Data Science)
                </p>
              </motion.div>
            </div>

            {/* Punchy Bio tailored to recruiters */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Undergraduate at <span className="font-semibold text-foreground">CMR Institute of Technology</span> (CGPA 8.68/10). Specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">AI / Machine Learning</span>, <span className="font-semibold text-indigo-600 dark:text-indigo-400">Generative AI & RAG</span>, and <span className="font-semibold text-cyan-600 dark:text-cyan-400">Full-Stack Development</span> with Python, Java, FastAPI, and React.
            </motion.p>

            {/* Quick Tech Skills Pill Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 pt-1"
            >
              {[
                'Python',
                'Java',
                'FastAPI',
                'React',
                'GenAI & RAG',
                'Scikit-Learn',
                'XGBoost',
                'SQL',
                'Dijkstra / DSA'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/80 text-secondary-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2"
            >
              <Button size="lg" asChild className="shadow-lg shadow-blue-500/20 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium">
                <Link href="#projects">
                  Explore Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild className="border-2 font-medium">
                <Link href="/Rakshitha_J_Resume.pdf" target="_blank" download="Rakshitha_J_Resume.pdf">
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume
                </Link>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={handleCopyEmail}
                className="font-medium gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Email Copied!' : 'Copy Email'}
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-command-palette'))
                  }
                }}
                className="font-medium gap-2 border border-border/80 hover:border-blue-500/50"
              >
                <Terminal className="w-4 h-4 text-blue-500" />
                <span>Quick Actions</span>
                <kbd className="hidden sm:inline-flex text-[10px] font-mono px-1.5 py-0.5 rounded bg-background border border-border text-muted-foreground">⌘K</kbd>
              </Button>
            </motion.div>

            {/* Social / Professional Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 justify-center lg:justify-start pt-3"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mr-1">
                Profiles:
              </span>
              {[
                { icon: Linkedin, href: 'http://www.linkedin.com/in/rakshitha-j-3b5b97352', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/raj23csds-lab', label: 'GitHub' },
                { icon: Code, href: 'https://leetcode.com/u/Rakshitha_J__/', label: 'LeetCode' },
                { icon: Mail, href: 'mailto:jvnrs125@gmail.com', label: 'Email' },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-center w-10 h-10 rounded-full border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 hover:scale-105 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column (Authentic Profile Photo + Floating Achievements) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center order-first lg:order-last"
          >
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              
              {/* Subtle Ambient Backing Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-cyan-400/30 rounded-3xl blur-2xl -z-10" />

              {/* Card Container for Photo */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-border/80 bg-card shadow-2xl p-2 sm:p-2.5">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/rakshitha.jpg"
                    alt="Rakshitha J - Computer Science & Data Science Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-bold text-base sm:text-lg drop-shadow-md">Rakshitha J</p>
                    <p className="text-xs text-white/90 drop-shadow">CMRIT • AECS Layout, Bengaluru</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: CGPA (Bottom-Left) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-card/95 backdrop-blur-md border border-border rounded-xl p-3 shadow-xl flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                  8.68
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">CGPA Distinction</div>
                  <div className="text-[11px] text-muted-foreground">B.E. Data Science (2027)</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Patent Innovation (Top-Right) */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 bg-card/95 backdrop-blur-md border border-border rounded-xl p-3 shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight text-foreground">Patent Filed (2025)</div>
                  <div className="text-[11px] text-muted-foreground">Smart Adaptive Baby Carry Bag</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: 1st Place Project Award (Mid-Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85 }}
                className="hidden sm:flex absolute top-1/2 -right-6 translate-y-1 bg-card/95 backdrop-blur-md border border-border rounded-xl px-3 py-2 shadow-xl items-center gap-2 z-20"
              >
                <Award className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-semibold">1st Place Mini-Project Winner</span>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Highlight Stats Bar for Rapid Recruiter Scanning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-14 sm:mt-16 pt-8 border-t border-border/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { metric: '8.68', label: 'B.E. CGPA', detail: 'CMRIT Data Science' },
            { metric: '1st Place', label: 'Mini-Project Award', detail: 'Metro Route Planner' },
            { metric: '1 Patent', label: 'Official Filing', detail: 'Smart Adaptive System' },
            { metric: '5+', label: 'Hackathons', detail: 'SIH, Adobe, EY, UNLOX' },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-card border border-border/70 shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                {stat.metric}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-foreground mt-0.5">{stat.label}</div>
              <div className="text-[11px] text-muted-foreground">{stat.detail}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

