import { Router } from 'express'
import { chat } from '../controllers/chatController.js'
import { getRepos } from '../controllers/githubController.js'
import { listContacts, submitContact } from '../controllers/contactController.js'

const router = Router()

router.post('/chat', chat)
router.get('/github/repos', getRepos)
router.post('/contact', submitContact)
router.get('/contact', listContacts)

export default router
