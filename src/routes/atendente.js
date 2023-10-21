const express = require('express')
const ControllerUsuario = require('../controllers/atendente')
const authMiddleware = require('../middleware/auth')

const controller = new ControllerUsuario()
const router = express.Router()

router.post('/api/login', controller.Login)
router.post('/api/usuario', authMiddleware, controller.Add)
router.put('/api/usuario/:id', authMiddleware, controller.Update)
router.delete('/api/usuario/:id', authMiddleware, controller.Delete)

module.exports = router