const { Router } = require('express')
const ctr = require('../controllers/auth.controller')
const router = Router()

// /api/auth

// /api/auth/login
router.post('/login', ctr.login)

// /api/auth/refresh
router.post('/refresh', ctr.refresh)

// /api/auth/user
router.get('/user', ctr.user)

// /api/auth/logout
router.post('/logout', ctr.logout)

module.exports = router
