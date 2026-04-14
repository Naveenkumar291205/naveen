import { motion } from 'framer-motion'
import Hero3D from './components/Hero3D'
import FloatingChatbot from './components/FloatingChatbot'
import GitHubProjects from './sections/GitHubProjects'
import InternshipDashboard from './sections/InternshipDashboard'
import ProjectShowcase from './sections/ProjectShowcase'
import StatsSection from './sections/StatsSection'
import ContactSection from './sections/ContactSection'
import useScrollProgress from './hooks/useScrollProgress'

export default function App() {
  const progress = useScrollProgress()
  return (
    <div>
      <div className="fixed left-0 top-0 z-50 h-1 bg-cyan-300" style={{ width: `${progress}%` }} />
      <header className="relative overflow-hidden px-6 pt-6">
        <Hero3D />
        <div className="absolute inset-0 grid place-items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h1 className="text-4xl font-black md:text-6xl">NAVEEN KUMAR</h1>
            <p className="text-sm text-slate-300 md:text-lg">AI Developer | Full Stack Intern | ML Intern</p>
            <div className="flex justify-center gap-3">
              <a href="#work" className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950">Explore Work</a>
              <a href="#contact" className="rounded-full border border-white/20 px-5 py-2">Hire Me</a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="space-y-14 px-6 py-12 md:px-12">
        <StatsSection />
        <section className="glass p-6">
          <h2 className="text-2xl font-bold">WHAT I BUILD</h2>
          <p className="mt-2 text-slate-300">AI-powered systems • Real-time applications • Secure web platforms • Scalable products</p>
        </section>
        <GitHubProjects />
        <InternshipDashboard />
        <ProjectShowcase />
        <ContactSection />
      </main>
      <FloatingChatbot />
    </div>
  )
}
