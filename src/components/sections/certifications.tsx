'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react'

const certifications = [
  {
    title: 'Agentic AI Certified Foundations Associate',
    issuer: 'Oracle',
    badge: '⚡ Agentic AI Specialized',
    featured: true,
    description: 'Certified in foundational autonomous AI agents, multi-agent coordination, tool calling, memory management, and enterprise agentic architectures.',
    skills: ['Agentic AI', 'Autonomous LLM Agents', 'Tool Calling', 'AI Architecture']
  },
  {
    title: 'Python for Data Science (Elite Certification)',
    issuer: 'NPTEL (IIT Madras / MoE)',
    badge: '🏆 Elite Distinction',
    featured: true,
    description: 'Awarded Elite status for mastery in Python data ecosystems, numerical computing, matrix mathematics, exploratory data analysis, and predictive modeling.',
    skills: ['Python', 'Data Science', 'Pandas', 'NumPy', 'Statistical Computing']
  },
  {
    title: 'Divide and Conquer, Sorting & Searching, Randomized Algorithms',
    issuer: 'Coursera (Stanford Online)',
    badge: '⚡ Advanced Algorithms',
    featured: false,
    description: 'Rigorous algorithmic coursework covering asymptotic complexity, recurrence relations, QuickSort/MergeSort optimality, and randomized selection.',
    skills: ['Algorithms', 'Divide & Conquer', 'Randomized Selection', 'Time Complexity']
  },
  {
    title: 'Software Engineering and Agile Software Development',
    issuer: 'Infosys Springboard',
    badge: '💼 Agile / SDLC',
    featured: false,
    description: 'Trained on modern enterprise software engineering paradigms, sprint management, user story estimation, Git workflows, and CI/CD clean code practices.',
    skills: ['Software Engineering', 'Agile & Scrum', 'SDLC', 'Clean Code Architecture']
  },
  {
    title: 'Fundamentals of Data Structures & Algorithms',
    issuer: 'CMR Institute of Technology',
    badge: '📚 Core Foundations',
    featured: false,
    description: 'Comprehensive collegiate training and laboratory implementations of linked lists, binary trees, heaps, weighted graphs, BFS/DFS, and dynamic programming.',
    skills: ['Data Structures', 'Tree & Graph Theory', 'Dynamic Programming', 'Memory Optimization']
  },
  {
    title: 'Learning Full Stack React',
    issuer: 'Infosys Springboard',
    badge: '🌐 Modern Frontend',
    featured: false,
    description: 'Hands-on frontend engineering covering component lifecycles, React hooks (useState, useEffect, useMemo), state management, and responsive SPA architecture.',
    skills: ['React.js', 'Frontend Architecture', 'Component Design', 'JavaScript ES6+']
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/30 relative">
      <div className="container max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Industry & academic credentials in Agentic AI, Data Science, Algorithms, and Software Engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-5 sm:p-6 rounded-2xl border bg-card shadow-sm hover:shadow-lg transition-all flex flex-col justify-between ${
                cert.featured 
                  ? 'border-blue-500/50 bg-gradient-to-b from-blue-500/5 to-card ring-1 ring-blue-500/20' 
                  : 'border-border hover:border-blue-500/40'
              }`}
            >
              <div>
                {/* Badge row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    cert.featured 
                      ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30' 
                      : 'bg-secondary text-secondary-foreground border border-border'
                  }`}>
                    {cert.badge}
                  </span>
                  <Award className={`w-4 h-4 ${cert.featured ? 'text-blue-500' : 'text-muted-foreground'}`} />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 leading-snug">
                  {cert.title}
                </h3>

                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {cert.issuer}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Skills Strip */}
              <div className="pt-3 border-t border-border/70">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

