# Futuristic Portfolio (React + Three.js + Node)

## Frontend structure
```
frontend/
  src/
    components/ (3D hero, chatbot)
    sections/ (GitHub, internships, showcase, stats, contact)
    hooks/ (scroll progress)
    lib/ (API layer)
    data/ (content)
    styles/
```

## Backend structure
```
backend/
  src/
    config/
    controllers/
    services/
    routes/
```

## Setup
1. `cd backend && cp .env.example .env` then set `OPENAI_API_KEY`, `GITHUB_USERNAME`.
2. `cd backend && npm install && npm run dev`
3. `cd frontend && npm install`
4. create `frontend/.env` with:
   - `VITE_API_BASE_URL=http://localhost:5000/api`
5. `cd frontend && npm run dev`

## Deployment
- Frontend: Vercel (root `frontend`, build `npm run build`, output `dist`)
- Backend: Render/Railway (root `backend`, start `npm start`, add env variables)

## Features delivered
- 3D animated hero with floating tech sphere and particles.
- AI chatbot using OpenAI backend personality prompt.
- GitHub auto-fetch projects with AI/Web/Backend filters.
- Internship dashboard cards and advanced project modal view.
- Live contact form with backend validation.
- Analytics-style counters, scroll progress bar, reveal animations.
- "WHAT I BUILD" differentiator section.
