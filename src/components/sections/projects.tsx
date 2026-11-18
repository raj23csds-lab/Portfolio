'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Sparkles, Award, Brain, Network, Activity, CheckCircle2, Layers } from 'lucide-react'
import Link from 'next/link'
import { ProjectModal, ProjectDetail } from '@/components/ui/project-modal'

type Project = ProjectDetail

const projects: Project[] = [
  {
    title: 'Metro Journey Tracker - Smart Route Planning System',
    category: 'systems',
    categoryLabel: 'Algorithms & Systems',
    awardBadge: '🏆 1st Place Winner (Dept. Mini-Project)',
    metricBadge: '83 Stations • 3 Metro Lines',
    description: 'A production-ready graph algorithm routing engine implementing Dijkstra’s shortest path on a weighted graph of 83 Bengaluru (Namma) Metro stations across Purple, Green, and Yellow lines.',
    problemSolved: 'Calculates optimal travel paths, minimal interchanges, and total distance with sub-millisecond route resolution.',
    tech: ['Java', 'REST APIs', 'Dijkstra Algorithm', 'Graph Theory', 'Data Structures', 'HTML5', 'CSS3', 'JavaScript'],
    architecture: [
      'Weighted bidirectional adjacency list modeling 83 metro stations and transfer hubs',
      'Modular Java REST APIs delivering optimal routes, transfer stops, and transit distance',
      'Interactive responsive web interface providing visual route mapping and stop-by-stop details',
      'Secured 1st Place in the Department-Level Mini Project Competition at CMRIT'
    ],
    githubUrl: 'https://github.com/raj23csds-lab/metro-journey-tracker',
    liveUrl: 'https://metro-team.netlify.app'
  },
  {
    title: 'CampusQuant AI - Placement & Virtual Hiring Platform',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & ML',
    awardBadge: '🔥 Flagship Full-Stack System',
    metricBadge: '94.5% Accuracy • 93.5% F1 Score',
    description: 'An enterprise campus recruitment ecosystem featuring an XGBoost predictive placement model, Groq LLaMA 3 AI interview analysis, and WebRTC video interview scoring.',
    problemSolved: 'Empowers students with career readiness analytics while providing recruiters isolated candidate evaluation portals.',
    tech: ['Python', 'FastAPI', 'XGBoost', 'Scikit-Learn', 'Groq (LLaMA 3)', 'React', 'TypeScript', 'WebRTC', 'SQLAlchemy', 'SQLite'],
    architecture: [
      'Role-based multi-tenant authentication for students, recruiters, and admins with strict recruiter isolation',
      'XGBoost ML model trained on synthetic dataset of 10,000 records & 11 features with 94.5% accuracy',
      'Groq LLaMA 3 integration for personalized skill-gap recommendations and interview summaries',
      'WebRTC live video interview room with real-time transcription and automated scorecard generation'
    ],
    githubUrl: 'https://github.com/raj23csds-lab/CampusQuant-AI'
  },
  {
    title: 'AI PDF Assistant - RAG Document Chatbot',
    category: 'genai',
    categoryLabel: 'GenAI & RAG',
    awardBadge: '⚡ Zero Hallucinations RAG',
    metricBadge: 'FAISS Vector Search • Gemini 2.5 Flash',
    description: 'An end-to-end Retrieval-Augmented Generation (RAG) assistant that indexes dense text from multi-document PDFs and generates context-grounded answers with verifiable citations.',
    problemSolved: 'Eliminates LLM hallucinations by restricting answers strictly to retrieved document passages with source references.',
    tech: ['Python', 'LangChain', 'Gemini 2.5 Flash', 'FAISS Vector DB', 'Hugging Face Embeddings', 'Streamlit', 'PyPDF'],
    architecture: [
      'Extracts and chunks complex document text using PyPDF and Hugging Face sentence transformers',
      'FAISS vector store indexing for sub-second dense semantic similarity retrieval',
      'LangChain orchestration passing prompt templates and grounded context to Google Gemini 2.5 Flash',
      'Streamlit web UI delivering conversational answers accompanied by exact page-level citations'
    ],
    githubUrl: 'https://github.com/raj23csds-lab/AI-PDF-Assistant'
  },
  {
    title: 'Medicine Recommendation System',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    awardBadge: '💊 Clinical AI Diagnostic',
    metricBadge: '93% Test Accuracy • 95% 5-Fold CV',
    description: 'A clinical diagnostic assistant that evaluates complex patient symptom profiles to predict probable illnesses and present medically verified treatment lookups.',
    problemSolved: 'Predicts 25 distinct diseases mapped against 100 symptom features with high cross-validated precision.',
    tech: ['Python', 'Machine Learning', 'Scikit-Learn', 'Tkinter GUI', 'SQL', 'Data Preprocessing', 'Model Benchmarking'],
    architecture: [
      'Benchmarked multiple Scikit-Learn classifiers (Random Forest, Decision Trees, Logistic Regression)',
      'Achieved 93% test accuracy and 95% 5-fold cross-validation on synthetic educational datasets',
      'Integrated relational SQL database for reliable disease-to-medication and precaution mapping',
      'Engineered an accessible Tkinter desktop application for immediate clinical symptom triage'
    ],
    githubUrl: 'https://github.com/raj23csds-lab'
  }
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null)

  const filterTabs = [
    { id: 'all', label: 'All Projects (4)' },
    { id: 'genai', label: 'GenAI & RAG' },
    { id: 'fullstack', label: 'Full-Stack & ML' },
    { id: 'systems', label: 'Algorithms & Java' },
    { id: 'ml', label: 'Machine Learning' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="container max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Projects & Systems
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            High-impact applications featuring real-world machine learning models, graph algorithms, and full-stack architecture.
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:border-blue-500/50 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {project.awardBadge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      {project.awardBadge}
                    </span>
                  )}
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {project.metricBadge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Problem Solved */}
                <div className="p-3 rounded-xl bg-secondary/50 border border-border/80 text-xs text-foreground/90 mb-4">
                  <span className="font-bold text-blue-600 dark:text-blue-400 mr-1.5">Impact:</span>
                  {project.problemSolved}
                </div>

                {/* Architecture Highlights */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Key Architecture & Engineering:
                  </h4>
                  <ul className="space-y-1.5">
                    {project.architecture.map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tech + Link */}
              <div className="pt-4 border-t border-border/70 space-y-4">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-1 grid grid-cols-2 gap-2">
                  <Button 
                    type="button" 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setSelectedProject(project)}
                    className="gap-1.5 font-medium hover:border-blue-500/60 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Layers className="w-3.5 h-3.5 text-blue-500" />
                    <span>Architecture</span>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild size="sm" variant="outline" className="gap-1.5 font-medium border-cyan-500/40 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </Link>
                    </Button>
                  )}
                  <Button asChild size="sm" variant="default" className="gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-medium">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Technical Deep-Dive Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  )
}

