import OpenAI from 'openai'
import { env } from '../config/env.js'

const client = new OpenAI({ apiKey: env.openaiApiKey })

export async function askPortfolioAssistant(message) {
  const completion = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.4,
    messages: [
      { role: 'system', content: "You are Naveen's AI assistant explaining his portfolio." },
      { role: 'user', content: message }
    ]
  })
  return completion.choices[0].message.content
}
