const { Router } = require('express')
const ctr = require('../controllers/managers.controller')
const router = Router()

// /api/managers

// /api/auth/user
router.get('/fetch', ctr.fetch)

module.exports = router
