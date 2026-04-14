import { fetchRepos } from '../services/githubService.js'

export async function getRepos(req, res) {
  try {
    const repos = await fetchRepos(req.query.category || 'all')
    return res.json(repos)
  } catch {
    return res.status(500).json({ error: 'Unable to fetch repositories' })
  }
}
