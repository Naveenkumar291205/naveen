import { useEffect, useState } from 'react'
import { fetchGitHubRepos } from '../lib/api'

const filters = ['all', 'ai', 'web', 'backend']

export default function GitHubProjects() {
  const [active, setActive] = useState('all')
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetchGitHubRepos(active).then(setRepos).catch(() => setRepos([]))
  }, [active])

  return (
    <section id="work" className="space-y-4">
      <h2 className="text-2xl font-bold">Live GitHub Projects</h2>
      <div className="flex gap-2">
        {filters.map((f) => <button key={f} onClick={() => setActive(f)} className={`rounded-full px-3 py-1 text-sm ${active === f ? 'bg-cyan-400 text-slate-950' : 'bg-white/10'}`}>{f.toUpperCase()}</button>)}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {repos.map((repo) => (
          <article key={repo.id} className="glass p-4 transition hover:-translate-y-1 hover:shadow-glow">
            <h3 className="font-semibold">{repo.name}</h3>
            <p className="text-sm text-slate-300">{repo.description || 'No description provided.'}</p>
            <p className="mt-2 text-xs text-cyan-300">⭐ {repo.stars} • {repo.language || 'Mixed stack'}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
