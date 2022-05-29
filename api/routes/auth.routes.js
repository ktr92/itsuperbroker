const { Router } = require('express')
const ctr = require('../controllers/auth.controller')
const router = Router()

// /api/auth

// /api/auth/login
router.post('/login', ctr.login)

// /api/auth/refresh
router.post('/refresh', ctr.refresh)

module.exports = router
