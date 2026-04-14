import { env } from '../config/env.js'

const headers = env.githubToken ? { Authorization: `Bearer ${env.githubToken}` } : {}

const classify = (repo) => {
  const text = `${repo.name} ${repo.description || ''}`.toLowerCase()
  if (/ai|ml|llm|neural/.test(text)) return 'ai'
  if (/api|server|backend|express|node/.test(text)) return 'backend'
  return 'web'
}

export async function fetchRepos(category = 'all') {
  const url = `https://api.github.com/users/${env.githubUsername}/repos?sort=updated&per_page=12`
  const res = await fetch(url, { headers })
  const data = await res.json()
  const mapped = (Array.isArray(data) ? data : []).map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    stars: repo.stargazers_count,
    language: repo.language,
    category: classify(repo)
  }))
  return category === 'all' ? mapped : mapped.filter((r) => r.category === category)
}
