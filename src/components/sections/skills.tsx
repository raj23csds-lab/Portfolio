'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Brain, 
  Database, 
  Globe, 
  Terminal, 
  BarChart3, 
  Cpu, 
  Sparkles, 
  CheckCircle2,
  Layers
} from 'lucide-react'

type SkillCategory = {
  id: string
  title: string
  icon: any
  color: string
  skills: { name: string; context?: string; highlighted?: boolean }[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI, Generative AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-500 to-indigo-500',
    skills: [
      { name: 'Generative AI & LLMs', context: 'Gemini 2.5 Flash, Groq LLaMA 3', highlighted: true },
      { name: 'RAG Architecture', context: 'LangChain, FAISS, Embeddings', highlighted: true },
      { name: 'Scikit-Learn', context: 'Classification, Benchmarking, CV', highlighted: true },
      { name: 'XGBoost', context: '94.5% Placement Predictor' },
      { name: 'Pandas & NumPy', context: 'Feature Engineering & EDA' },
      { name: 'Matplotlib', context: 'Data Visualization' },
      { name: 'Hugging Face Embeddings', context: 'Vector Embeddings' },
      { name: 'PyPDF', context: 'Document Parsing' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python', context: 'Primary Language for AI/ML & APIs', highlighted: true },
      { name: 'Java', context: 'Dijkstra Routing Graph & OOP', highlighted: true },
      { name: 'TypeScript', context: 'Typed Full-Stack Development' },
      { name: 'SQL', context: 'Relational Queries & Optimization' },
      { name: 'JavaScript (ES6+)', context: 'Modern Web Engineering' },
    ],
  },
  {
    id: 'backend-web',
    title: 'Backend, Web & APIs',
    icon: Globe,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'FastAPI', context: 'High-performance Python APIs', highlighted: true },
      { name: 'RESTful API Architecture', context: 'Modular Endpoints & JSON' },
      { name: 'React.js', context: 'Hooks, State, Component Hierarchy', highlighted: true },
      { name: 'Streamlit', context: 'Rapid Interactive AI Apps' },
      { name: 'HTML5 & CSS3', context: 'Semantic & Responsive Design' },
      { name: 'Tailwind CSS', context: 'Modern Glassmorphic UI' },
      { name: 'WebRTC Basics', context: 'Live Video & Audio Streams' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & ORM',
    icon: Database,
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'MySQL', context: 'Relational Schemas & Queries', highlighted: true },
      { name: 'MongoDB', context: 'NoSQL Document Store' },
      { name: 'SQLite', context: 'Embedded Application Database' },
      { name: 'SQLAlchemy', context: 'Python ORM & Modeling' },
      { name: 'FAISS Vector DB', context: 'High-speed Semantic Search', highlighted: true },
    ],
  },
  {
    id: 'data-bi',
    title: 'Data Analysis & BI',
    icon: BarChart3,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Tableau', context: 'Interactive BI Dashboards' },
      { name: 'Power BI', context: 'Business Analytics & Reports' },
      { name: 'MS Excel (Advanced)', context: 'Formulas, Pivot Tables, Analysis' },
      { name: 'Feature Engineering', context: 'Data Preprocessing & Scaling' },
    ],
  },
  {
    id: 'core-cs',
    title: 'Core CS & Software Engineering',
    icon: Cpu,
    color: 'from-blue-600 to-violet-600',
    skills: [
      { name: 'Data Structures & Algorithms', context: 'Trees, Graphs, Dijkstra, DP', highlighted: true },
      { name: 'Object-Oriented Programming (OOP)', context: 'Java & Python Class Architecture' },
      { name: 'Database Management Systems (DBMS)', context: 'ACID, Normalization, Indexing' },
      { name: 'Operating Systems', context: 'Process, Memory, Concurrency' },
      { name: 'Agile & SDLC', context: 'Iterative Development & Sprints' },
    ],
  },
  {
    id: 'tools-os',
    title: 'Development Tools & Environments',
    icon: Terminal,
    color: 'from-slate-500 to-zinc-600',
    skills: [
      { name: 'Git & GitHub', context: 'Version Control & Team Collab', highlighted: true },
      { name: 'VS Code', context: 'Primary Development Environment' },
      { name: 'Antigravity IDE', context: 'AI Agentic Pair Programming' },
      { name: 'Linux', context: 'CLI, Shell Commands & Scripting' },
      { name: 'Windows', context: 'OS Administration & Dev' },
    ],
  },
]

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filterTabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'ai-ml', label: 'AI & GenAI' },
    { id: 'languages', label: 'Languages' },
    { id: 'backend-web', label: 'Backend & Web' },
    { id: 'databases', label: 'Databases' },
    { id: 'core-cs', label: 'Core CS & Algorithms' },
  ]

  const filteredCategories = activeFilter === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeFilter)

  return (
    <section id="skills" className="py-16 sm:py-20 bg-muted/40 px-4 sm:px-6 relative">
      <div className="container max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technical{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Practical, project-tested technologies across Machine Learning, Full-Stack Development, and Computer Science fundamentals.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="p-5 rounded-2xl border border-border bg-card shadow-sm hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-sm shrink-0`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground leading-snug">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-2.5 rounded-xl border text-xs sm:text-sm transition-colors ${
                        skill.highlighted
                          ? 'bg-blue-500/5 dark:bg-blue-500/10 border-blue-500/30'
                          : 'bg-secondary/40 border-border/80'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-foreground flex items-center gap-1.5">
                          {skill.highlighted && (
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          )}
                          {skill.name}
                        </span>
                        {skill.highlighted && (
                          <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">
                            Core
                          </span>
                        )}
                      </div>
                      {skill.context && (
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          {skill.context}
                        </p>
                      )}
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

