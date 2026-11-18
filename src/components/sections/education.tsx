'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Science & Engineering (Data Science)',
    institution: 'CMR Institute of Technology (CMRIT)',
    campus: 'AECS Layout, Bengaluru, Karnataka',
    period: '2023 – 2027 [Pursuing]',
    grade: '8.68 CGPA',
    gradeLabel: 'First Class with Distinction',
    featured: true,
    highlights: [
      'Specialized curriculum in Data Science, Machine Learning, Deep Learning, and Generative AI',
      'Secured 1st Place in the Department Mini Project Competition for Metro Journey Tracker',
      'Active Event Management Member at the CMRIT Innovation Club since Nov 2025',
      'Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, OOP, Linear Algebra, Probability & Statistics'
    ]
  },
  {
    degree: 'Class XII – Pre-University Course (PUC)',
    field: 'Science Stream (PCMB)',
    institution: 'Mount Carmel PU College',
    campus: 'Vasanth Nagar, Bengaluru, Karnataka',
    period: '2021 – 2023',
    grade: '87.67%',
    gradeLabel: 'Distinction',
    featured: false,
    highlights: [
      'Graduated with Distinction in Pre-University Science examination',
      'Built rigorous foundations in Advanced Mathematics, Physics, Chemistry, and Logic',
      'Developed strong analytical and scientific problem-solving methodology'
    ]
  },
  {
    degree: 'Class X – Secondary School Certificate',
    field: 'High School General Sciences & Mathematics',
    institution: 'Seventh-Day Adventist Higher Secondary School',
    campus: 'Bengaluru, Karnataka',
    period: 'Completed 2021',
    grade: '84.32%',
    gradeLabel: 'Top Rank Holder & Academic Award',
    featured: false,
    highlights: [
      'Conferred the prestigious Academic Excellence Award as the High School Top Rank Holder',
      'Consistent scholastic distinction and leadership throughout secondary education',
      'Active participation in athletics, inter-school cultural, and science exhibitions'
    ]
  }
]

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="container max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Scholastic Pedigree
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Academic{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Formal engineering education, distinction milestones, and foundational coursework.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 sm:p-7 rounded-2xl border bg-card shadow-sm hover:shadow-lg transition-all ${
                edu.featured 
                  ? 'border-blue-500/50 bg-gradient-to-r from-blue-500/5 via-card to-card ring-1 ring-blue-500/20' 
                  : 'border-border hover:border-blue-500/40'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      {edu.period}
                    </span>
                    {edu.featured && (
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Current Engineering Program
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {edu.field}
                  </div>
                  
                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                    <span className="font-medium text-foreground">{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      {edu.campus}
                    </span>
                  </div>
                </div>

                {/* Grade Callout */}
                <div className="md:text-right shrink-0">
                  <div className="inline-block md:block px-4 py-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-extrabold text-lg sm:text-xl shadow-md">
                    {edu.grade}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground mt-1">
                    {edu.gradeLabel}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-border/70">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Academic Milestones & Highlights:
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
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

