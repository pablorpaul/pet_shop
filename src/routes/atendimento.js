const express = require('express')
const ControllerAtendimento = require('../controllers/atendimento')

const controller = new ControllerAtendimento()
const router = express.Router()

router.get('/api/atendimento/:id', controller.PegarUm)
router.get('/api/atendimento/', controller.PegarTodos)
router.get('/api/atendimento/data/:id', controller.PegarPorData)
router.post('/api/atendimento', controller.Add)
router.put('/api/atendimento/:id', controller.Update)
router.delete('/api/atendimento/:id', controller.Delete)

module.exports = router