import { motion } from 'framer-motion'
import { useState } from 'react'
import { projectShowcase } from '../data/content'

export default function ProjectShowcase() {
  const [selected, setSelected] = useState(null)
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Advanced Project Showcase</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projectShowcase.map((project) => (
          <motion.button key={project.name} whileHover={{ scale: 1.02, rotateX: 6, rotateY: -4 }} onClick={() => setSelected(project)} className="glass p-4 text-left">
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-sm text-slate-300">{project.problem}</p>
          </motion.button>
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={() => setSelected(null)}>
          <article className="glass max-w-xl p-5" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-semibold">{selected.name}</h3>
            <p className="mt-2"><span className="text-cyan-300">Problem:</span> {selected.problem}</p>
            <p><span className="text-cyan-300">Solution:</span> {selected.solution}</p>
            <p><span className="text-cyan-300">Tech:</span> {selected.stack}</p>
            <p><span className="text-cyan-300">Outcome:</span> {selected.outcome}</p>
          </article>
        </div>
      )}
    </section>
  )
}
