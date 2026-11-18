'use client'

import { motion } from 'framer-motion'
import { Award, Lightbulb, Trophy, Star, ShieldCheck, CheckCircle2 } from 'lucide-react'

const achievements = [
  {
    icon: Lightbulb,
    title: 'Filed Patent: "Smart Adaptive Baby Carry Bag"',
    category: 'Official Patent Innovation (2025)',
    issuer: 'Patent Office / IP India',
    date: 'Filing Year: 2025',
    status: 'Officially Filed & Recorded',
    featured: true,
    description: 'Invented and officially filed a utility innovation patent for an ergonomic infant mobility carrier designed to eliminate parental spinal strain and maximize child safety.',
    highlights: [
      'Engineered an adaptive weight distribution mechanism that redistributes infant load across the torso',
      'Incorporated ergonomic pelvic and posture-alignment structures for infant orthopedic comfort',
      'Integrated conceptual sensory feedback pathways for ambient temperature & posture shifts'
    ],
    skills: ['Patent Architecture', 'Product Design & Ergonomics', 'Adaptive Load Systems', 'IP Documentation']
  },
  {
    icon: Trophy,
    title: '1st Place – Department-Level Mini Project Competition',
    category: 'Algorithmic Excellence Award',
    issuer: 'Dept. of CSE, CMR Institute of Technology',
    date: 'Academic Year 2024–2025',
    status: 'Department Rank 1',
    featured: false,
    description: 'Awarded 1st Place for the Metro Journey Tracker, beating dozens of peer engineering projects on algorithmic sophistication, routing speed, and system architecture.',
    highlights: [
      'Implemented Dijkstra’s shortest path algorithm over an 83-station weighted transit graph',
      'Praised by faculty jury for sub-millisecond route calculation and modular Java REST API design',
      'Interactive visual UI demonstrating optimal transfer interchanges across Bengaluru Namma Metro'
    ],
    skills: ['Graph Algorithms', 'Dijkstra Routing', 'Java REST APIs', 'System Architecture']
  },
  {
    icon: Star,
    title: 'Academic Excellence Award – Top Rank Holder',
    category: 'Scholastic Distinction',
    issuer: 'Seventh-Day Adventist Higher Secondary School',
    date: 'Class X Board Examination (2021)',
    status: 'Top Rank Achiever',
    featured: false,
    description: 'Conferred the prestigious Academic Excellence Award as the High School Top Rank Holder (84.32%), recognized for exceptional mathematical and analytical performance.',
    highlights: [
      'Highest overall scholastic standing across the graduating batch',
      'Demonstrated consistent focus, analytical thinking, and scholastic rigor',
      'Built a rock-solid foundation in mathematics, logic, and scientific problem solving'
    ],
    skills: ['Mathematics & Logic', 'Scholastic Rigor', 'Analytical Reasoning', 'Consistent Discipline']
  }
]

export function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="container max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            Distinctions & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Honors &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Patent innovation, competitive algorithmic awards, and academic honors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border bg-card shadow-sm hover:shadow-xl transition-all flex flex-col justify-between ${
                item.featured 
                  ? 'border-amber-500/50 bg-gradient-to-b from-amber-500/5 to-card lg:col-span-1 ring-1 ring-amber-500/20' 
                  : 'border-border hover:border-blue-500/50'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    item.featured ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400' : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    item.featured 
                      ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30' 
                      : 'bg-secondary text-secondary-foreground border border-border'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                  {item.category}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 leading-snug">
                  {item.title}
                </h3>

                <div className="text-xs text-muted-foreground mb-3 flex items-center gap-1.5">
                  <span className="font-semibold text-foreground/90">{item.issuer}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Strip */}
              <div className="pt-4 border-t border-border/70">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Competencies Demonstrated:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md"
                    >
                      {s}
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

