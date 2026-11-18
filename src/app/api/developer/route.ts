import { NextResponse } from 'next/server'

export async function GET() {
  const startTime = Date.now()

  const systemMetrics = {
    developer: 'Rakshitha J',
    role: 'Computer Science & Data Science Engineer',
    education: {
      institution: 'CMR Institute of Technology, Bangalore',
      cgpa: '8.68 / 10',
      graduation: '2027',
    },
    system: {
      framework: 'Next.js 16 (App Router)',
      runtime: 'Node.js / Edge Compatible',
      styling: 'Tailwind CSS + Framer Motion',
      status: 'operational',
      health: '100%',
      responseTimeMs: Date.now() - startTime,
      timestamp: new Date().toISOString(),
    },
    skillsMatrix: {
      languages: ['Python', 'Java', 'TypeScript', 'SQL', 'JavaScript (ES6+)'],
      ai_ml: ['Generative AI', 'RAG (LangChain + FAISS)', 'Scikit-Learn', 'XGBoost', 'Groq (LLaMA 3)', 'Gemini 2.5 Flash'],
      backend_web: ['FastAPI', 'Next.js', 'React.js', 'REST APIs', 'SQLAlchemy', 'WebRTC'],
      databases: ['MySQL', 'MongoDB', 'SQLite', 'FAISS Vector DB'],
    },
    projectsCount: 4,
    socials: {
      github: 'https://github.com/raj23csds-lab',
      linkedin: 'http://www.linkedin.com/in/rakshitha-j-3b5b97352',
      email: 'jvnrs125@gmail.com',
    },
  }

  return NextResponse.json(systemMetrics, {
    status: 200,
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
    },
  })
}
