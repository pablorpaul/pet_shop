const express = require('express')
const ControllerCliente = require('../controllers/cliente')

const controller = new ControllerCliente()
const router = express.Router()

router.get('/api/cliente/:id', controller.PegarUm)
router.get('/api/cliente/', controller.PegarTodos)
router.post('/api/cliente', controller.Add)
router.put('/api/cliente/:id', controller.Update)
router.delete('/api/cliente/:id', controller.Delete)

module.exports = router