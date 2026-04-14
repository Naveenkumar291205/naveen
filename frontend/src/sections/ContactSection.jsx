import { useState } from 'react'
import { sendContact } from '../lib/api'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    try {
      await sendContact(form)
      setStatus('Message sent successfully.')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('Submission failed. Try again.')
    }
  }

  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-2xl font-bold">Live Contact System</h2>
      <form onSubmit={submit} className="glass mx-auto grid max-w-xl gap-3 p-4">
        {['name', 'email'].map((k) => <input key={k} required type={k === 'email' ? 'email' : 'text'} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} placeholder={k[0].toUpperCase() + k.slice(1)} className="rounded-lg border border-white/20 bg-white/5 px-3 py-2" />)}
        <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" rows={4} className="rounded-lg border border-white/20 bg-white/5 px-3 py-2" />
        <button className="rounded-lg bg-cyan-400 py-2 font-semibold text-slate-950">Send</button>
        {status && <p className="text-sm text-violet-200">{status}</p>}
      </form>
    </section>
  )
}
