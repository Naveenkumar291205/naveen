import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

export const api = axios.create({ baseURL: API_BASE })

export const fetchGitHubRepos = async (category = 'all') => {
  const { data } = await api.get('/github/repos', { params: { category } })
  return data
}

export const askAssistant = async (message) => {
  const { data } = await api.post('/chat', { message })
  return data
}

export const sendContact = async (payload) => {
  const { data } = await api.post('/contact', payload)
  return data
}
