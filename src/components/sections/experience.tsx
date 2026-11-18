'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, Trophy, Users, Award, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    role: 'Virtual Internship Trainee',
    organization: 'Infosys Springboard',
    type: 'Virtual Internship',
    period: '2026 (8 Weeks)',
    location: 'Virtual',
    badge: 'Full-Stack Development',
    description: 'Built BudgetBuddy, a personal finance management application focused on simplifying income tracking, expense management, budgeting, and financial analysis.',
    highlights: [
      'Developed the responsive React.js frontend and Python FastAPI backend REST APIs',
      'Implemented income and expense tracking, expense categorization, and budget management workflows',
      'Created spending analysis features and concise financial summaries for clearer money insights',
      'Collaborated within an 8-week virtual internship program using a structured, project-based workflow'
    ],
    tech: ['React.js', 'Python', 'FastAPI', 'REST APIs']
  },
  {
    role: 'Machine Learning Intern',
    organization: 'Intrainz Innovation Private Limited',
    type: 'Industry Internship',
    period: 'Oct 1, 2025 – Dec 1, 2025 (2 Months)',
    location: 'Bengaluru, Karnataka',
    badge: '💼 Professional Experience',
    description: 'Conducted end-to-end fraud detection on highly imbalanced real-world financial transaction datasets, from data cleansing to predictive model benchmarking and reporting.',
    highlights: [
      'Cleansed and transformed real-world transaction data through feature engineering, missing-value imputation, and outlier treatment using Python and Pandas',
      'Trained and evaluated Random Forest and Logistic Regression models to detect fraudulent online payments on severe class-imbalanced datasets',
      'Optimized hyperparameters and cross-validation pipelines, rigorously measuring precision, recall, and F1-score to minimize false positives',
      'Authored a comprehensive technical report documenting the end-to-end tech stack, algorithmic methodology, and benchmarked fraud detection results'
    ],
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'Random Forest', 'Logistic Regression', 'Feature Engineering']
  },
  {
    role: 'Hackathon Builder & Competitor',
    organization: 'National & Premier Tech Competitions',
    type: 'Competitive Engineering',
    period: '2024 – 2026',
    location: 'Bengaluru / India',
    badge: '⚡ 5+ Hackathons',
    description: 'Demonstrated rapid software prototyping, algorithmic thinking, and collaborative execution across premier national hackathons.',
    highlights: [
      'UNLOX Hackathon (2026) – Engineered prototype AI-driven solutions addressing real-world problem statements',
      'Adobe India Hackathon (2025) – Competed in algorithmic problem-solving and scalable software system design under strict time constraints',
      'EY Techathon 6.0 (2025) – Engaged in enterprise-level tech innovation and data-driven problem tracks',
      'Full-Stack Fiesta 2025 (CMRIT) – Built fast, responsive full-stack web applications with modern frontend & API stacks',
      'Smart India Hackathon (SIH 2024 at CMRIT) – Conceptualized and prototyped solutions for large-scale societal challenges'
    ],
    tech: ['Full-Stack Development', 'AI Prototyping', 'System Design', 'Team Leadership']
  },
  {
    role: 'Event Management Member',
    organization: 'Innovation Club – CMRIT',
    type: 'Leadership & Community',
    period: 'Nov 2025 – Present',
    location: 'CMRIT, Bengaluru',
    badge: '🤝 Campus Leadership',
    description: 'Spearheading departmental technical initiatives, coding contests, and student innovation events to foster a thriving developer culture.',
    highlights: [
      'Coordinating campus-wide technical hackathons, guest lectures with industry experts, and coding competitions',
      'Facilitating peer-to-peer learning groups and mentorship for junior engineering students',
      'Managing logistics, team outreach, and judging criteria for multi-track collegiate innovation symposiums'
    ],
    tech: ['Event Management', 'Public Speaking', 'Community Building', 'Agile Coordination']
  },
  {
    role: 'Athlete & Team Player',
    organization: 'Throwball Athletics',
    type: 'Sports & Extracurriculars',
    period: 'Ongoing',
    location: 'Bengaluru, Karnataka',
    badge: '🏃 Sports & Discipline',
    description: 'Active athlete competing in Throwball, building physical stamina, reflex speed, and effective court communication.',
    highlights: [
      'Cultivating consistent discipline, quick tactical decision-making, and high-pressure team communication',
      'Balancing intense academic pursuits with athletic teamwork, sportsmanship, and mental resilience'
    ],
    tech: ['Teamwork', 'Consistency', 'Strategic Focus', 'Resilience']
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-muted/30 px-4 sm:px-6 relative">
      <div className="container max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Experience &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Involvement
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Practical industry internship, competitive hackathon hack-days, leadership roles, and athletic discipline.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Center Node */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-blue-600 text-white shadow-md shrink-0 z-10 ml-0 md:ml-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Calendar className="w-4 h-4" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-5 sm:p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:border-blue-500/50 hover:shadow-lg transition-all">
                
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {exp.badge}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded">
                    {exp.period}
                  </span>
                </div>

                <h3 className="font-bold text-lg sm:text-xl text-foreground">
                  {exp.role}
                </h3>
                
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  {exp.organization}
                </div>
                
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-4">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md"
                    >
                      {t}
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

