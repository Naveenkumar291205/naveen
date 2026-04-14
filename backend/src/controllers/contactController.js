const messages = []

export function submitContact(req, res) {
  const { name, email, message } = req.body
  if (!name || !email || !message) return res.status(400).json({ error: 'All fields are required' })
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!isValidEmail) return res.status(400).json({ error: 'Invalid email format' })

  messages.push({ id: Date.now(), name, email, message, createdAt: new Date().toISOString() })
  return res.json({ success: true, message: 'Contact request received' })
}

export function listContacts(_, res) {
  return res.json(messages)
}
