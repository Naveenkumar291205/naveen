import { motion } from 'framer-motion'

const stats = [
  ['Projects Built', 24],
  ['Technologies Used', 18],
  ['Internship Experience', 3],
  ['Hackathon Achievements', 6]
]

export default function StatsSection() {
  return (
    <section className="grid gap-4 md:grid-cols-4">
      {stats.map(([label, value]) => (
        <motion.div key={label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-4 text-center">
          <p className="text-3xl font-bold text-cyan-300">{value}+</p>
          <p className="text-sm text-slate-300">{label}</p>
        </motion.div>
      ))}
    </section>
  )
}
