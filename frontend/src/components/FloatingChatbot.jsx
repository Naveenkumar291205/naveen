import { Bot, Send, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { askAssistant } from '../lib/api'

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{ role: 'assistant', text: "Hi, I'm Naveen's AI assistant. Ask about skills, projects, or experience." }])

  const send = async () => {
    if (!input.trim()) return
    const text = input
    setInput('')
    setMessages((m) => [...m, { role: 'user', text }])
    try {
      const res = await askAssistant(text)
      setMessages((m) => [...m, { role: 'assistant', text: res.reply }])
    } catch {
      setMessages((m) => [...m, { role: 'assistant', text: 'Server unavailable. Please try again.' }])
    }
  }

  return (
    <>
      <button onClick={() => setOpen((v) => !v)} className="fixed bottom-6 right-6 z-50 rounded-full bg-cyan-400 p-4 text-slate-950 shadow-glow">
        {open ? <X /> : <Bot />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-24 right-6 z-50 w-[340px] glass p-4">
            <h3 className="mb-3 text-sm font-semibold">AI Portfolio Assistant</h3>
            <div className="mb-3 h-72 space-y-2 overflow-auto rounded-lg bg-black/25 p-2 text-sm">
              {messages.map((m, i) => <div key={i} className={m.role === 'user' ? 'text-cyan-300' : 'text-violet-200'}>{m.role === 'user' ? 'You: ' : 'AI: '}{m.text}</div>)}
            </div>
            <div className="flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm outline-none" placeholder="Ask anything..." />
              <button onClick={send} className="rounded-lg bg-violet-500 px-3"><Send size={16} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
