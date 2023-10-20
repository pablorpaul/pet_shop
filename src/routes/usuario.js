const express = require('express')
const ControllerUsuario = require('../controllers/usuario')
const authMiddleware = require('../middleware/auth')

const controller = new ControllerUsuario()
const router = express.Router()

router.post('/api/login', controller.Login)
router.get('/api/usuario/:id', authMiddleware, controller.PegarUm)
router.get('/api/usuario/', authMiddleware, controller.PegarTodos)
router.post('/api/usuario', authMiddleware, controller.Add)
router.put('/api/usuario/:id', authMiddleware, controller.Update)
router.delete('/api/usuario/:id', authMiddleware, controller.Delete)

module.exports = router