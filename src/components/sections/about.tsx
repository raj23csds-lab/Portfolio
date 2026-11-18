'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Sparkles, Brain, Code2, Lightbulb, Trophy, Check, Copy, Languages, Palette } from 'lucide-react'

export function About() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedEmail(id)
    setTimeout(() => setCopiedEmail(null), 2000)
  }

  const pillars = [
    {
      icon: Brain,
      title: 'AI & Data Science',
      description: 'Developing RAG pipelines with FAISS & Gemini, XGBoost predictive models (94.5% accuracy), and fraud classification models with Scikit-Learn.',
    },
    {
      icon: Code2,
      title: 'Software & Algorithms',
      description: 'Solid grounding in DSA, graph algorithms (Dijkstra on 83 stations), modular REST APIs in Java & FastAPI, and full-stack React / TypeScript applications.',
    },
    {
      icon: Lightbulb,
      title: 'Patent Innovator',
      description: 'Officially filed an innovation patent in 2025 for "Smart Adaptive Baby Carry Bag", solving real-world ergonomic infant safety and adaptive weight distribution.',
    },
    {
      icon: Trophy,
      title: 'Competitive Spirit',
      description: '1st Place winner at CMRIT Mini Project Competition; active participant across 5 hackathons including Adobe India Hackathon, EY Techathon, and SIH.',
    },
  ]

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-16 sm:py-20 bg-background px-4 sm:px-6 relative"
    >
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Candidate Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Rakshitha J
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            A purpose-driven Computer Science (Data Science) undergraduate combining solid algorithms with practical machine learning to build intelligent systems.
          </p>
        </div>

        {/* Top Split: Career Objective Narrative & Contact Cards */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                🎯 Career Objective
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Computer Science Engineering (Data Science) student with a strong foundation in software development, machine learning, and data analysis. Seeking a software, data, or AI/ML role to contribute to real-world projects and build effective, data-driven solutions while continuously enhancing technical expertise.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Currently pursuing a Bachelor of Engineering at <strong className="text-foreground">CMR Institute of Technology, Bengaluru</strong> with an <strong className="text-blue-600 dark:text-blue-400">8.68 CGPA</strong>. I bring real-world experience from an ML internship at Intrainz Innovation, rigorous competitive hackathons, and certified proficiency in Agentic AI, Data Structures, and React.
              </p>
            </div>

            {/* Languages & Hobbies Strip */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground uppercase tracking-wider">
                  <Languages className="w-4 h-4 text-blue-500" />
                  Linguistic Competency
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['English', 'Telugu', 'Kannada', 'Tamil', 'Hindi'].map((lang) => (
                    <span
                      key={lang}
                      className="px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground uppercase tracking-wider">
                  <Palette className="w-4 h-4 text-indigo-500" />
                  Interests & Hobbies
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Listening to Music', 'Yoga & Wellness', 'Creative Sketching & Art', 'Throwball Sports'].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-0.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact & Fast Connect (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-3"
          >
            {/* Location */}
            <div className="p-4 rounded-xl border border-border bg-card shadow-sm flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</div>
                <div className="text-sm font-semibold text-foreground mt-0.5">Bengaluru, Karnataka, India</div>
                <div className="text-xs text-muted-foreground">Vijinapura, Bangalore - 560016</div>
              </div>
            </div>

            {/* Primary Email */}
            <div className="p-4 rounded-xl border border-border bg-card shadow-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Primary Email</div>
                  <a href="mailto:jvnrs125@gmail.com" className="text-sm font-semibold text-foreground hover:text-blue-500 transition-colors">
                    jvnrs125@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('jvnrs125@gmail.com', 'p-email')}
                className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                title="Copy email"
              >
                {copiedEmail === 'p-email' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Academic Email */}
            <div className="p-4 rounded-xl border border-border bg-card shadow-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Academic Email</div>
                  <a href="mailto:raj23csds@cmrit.ac.in" className="text-sm font-semibold text-foreground hover:text-blue-500 transition-colors">
                    raj23csds@cmrit.ac.in
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('raj23csds@cmrit.ac.in', 'a-email')}
                className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                title="Copy academic email"
              >
                {copiedEmail === 'a-email' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="p-4 rounded-xl border border-border bg-card shadow-sm flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone / Mobile</div>
                  <a href="tel:+917899422347" className="text-sm font-semibold text-foreground hover:text-blue-500 transition-colors">
                    +91 7899422347
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('+917899422347', 'phone')}
                className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                title="Copy phone"
              >
                {copiedEmail === 'phone' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

        </div>

        {/* Bottom: Core Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 rounded-2xl border border-border bg-card hover:border-blue-500/50 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                <pillar.icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-foreground mb-1.5">{pillar.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}

