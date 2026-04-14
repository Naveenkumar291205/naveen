import { motion } from 'framer-motion'
import { internships } from '../data/content'

export default function InternshipDashboard() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Internship Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {internships.map((item) => (
          <motion.article whileHover={{ scale: 1.03, rotateX: 5, rotateY: 3 }} key={item.company} className="glass p-4">
            <h3 className="font-semibold">{item.company}</h3>
            <p className="text-cyan-300">{item.role}</p>
            <p className="mt-2 text-sm text-slate-300">{item.work}</p>
            <p className="mt-2 text-xs text-violet-200">Impact: {item.impact}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
