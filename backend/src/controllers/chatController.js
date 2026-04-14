import { askPortfolioAssistant } from '../services/openaiService.js'

export async function chat(req, res) {
  try {
    const { message } = req.body
    if (!message) return res.status(400).json({ error: 'Message is required' })
    const reply = await askPortfolioAssistant(message)
    return res.json({ reply })
  } catch {
    return res.status(500).json({ error: 'Chat service failed' })
  }
}
