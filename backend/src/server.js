import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
import { env } from './config/env.js'

const app = express()
app.use(cors({ origin: env.allowedOrigin }))
app.use(express.json())
app.use('/api', routes)
app.get('/health', (_, res) => res.json({ ok: true }))

app.listen(env.port, () => {
  console.log(`Backend running on port ${env.port}`)
})
