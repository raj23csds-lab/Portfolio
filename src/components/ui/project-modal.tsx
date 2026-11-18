'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  Target, 
  ShieldCheck,
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export type ProjectDetail = {
  title: string
  category: 'genai' | 'ml' | 'systems' | 'fullstack'
  categoryLabel: string
  awardBadge?: string
  metricBadge: string
  description: string
  problemSolved: string
  tech: string[]
  architecture: string[]
  githubUrl: string
  liveUrl?: string
}

interface ProjectModalProps {
  project: ProjectDetail | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="w-full max-w-3xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-border bg-secondary/20 flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {project.categoryLabel}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {project.metricBadge}
                </span>
                {project.awardBadge && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {project.awardBadge}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {project.title}
              </h2>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground shrink-0 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
            
            {/* Overview & Problem Solved */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-500" />
                Project Objective & Core Problem
              </h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="p-3.5 rounded-xl bg-secondary/40 border border-border/80 text-xs sm:text-sm text-foreground/90">
                <strong className="text-blue-600 dark:text-blue-400 font-semibold">Engineered Solution: </strong>
                {project.problemSolved}
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-500" />
                System Architecture & Technical Implementation
              </h3>
              <div className="grid gap-2.5">
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-border/70 bg-card hover:bg-secondary/20 flex items-start gap-3 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack Tags */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-500" />
                Technologies & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-secondary text-foreground/90 border border-border hover:border-blue-500/40 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-5 border-t border-border bg-secondary/20 flex items-center justify-between gap-3">
            <span className="text-xs text-muted-foreground hidden sm:inline">
              Verified Production & Academic Build
            </span>
            <div className="flex items-center gap-2 ml-auto">
              <Button variant="outline" size="sm" onClick={onClose} className="rounded-xl">
                Close
              </Button>
              {project.liveUrl && (
                <Button asChild size="sm" variant="outline" className="gap-2 rounded-xl border-cyan-500/40 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              <Button asChild size="sm" className="gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
