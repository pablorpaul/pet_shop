const express = require('express')
const ControllerCachorro = require('../controllers/cachorro')
const authMiddleware = require('../middleware/auth')

const controller = new ControllerCachorro()
const router = express.Router()

router.get('/api/cachorro/:id', authMiddleware, controller.PegarUm)
router.get('/api/cachorro/', authMiddleware, controller.PegarTodos)
router.post('/api/cachorro', authMiddleware, controller.Add)
router.put('/api/cachorro/:id', authMiddleware, controller.Update)
router.delete('/api/cachorro/:id', authMiddleware, controller.Delete)

module.exports = router