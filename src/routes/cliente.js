const express = require('express')
const ControllerCliente = require('../controllers/cliente')
const authMiddleware = require('../middleware/auth')

const controller = new ControllerCliente()
const router = express.Router()

router.post('/api/login', controller.Login)
router.get('/api/cliente/:id', authMiddleware, controller.PegarUm)
router.get('/api/cliente/', authMiddleware, controller.PegarTodos)
router.post('/api/cliente', authMiddleware, controller.Add)
router.put('/api/cliente/:id', authMiddleware, controller.Update)
router.delete('/api/cliente/:id', authMiddleware, controller.Delete)

module.exports = router