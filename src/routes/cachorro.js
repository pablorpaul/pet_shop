const express = require('express')
const ControllerCachorro = require('../controllers/cachorro')

const controller = new ControllerCachorro()
const router = express.Router()

router.get('/api/cachorro/:id', controller.PegarUm)
router.get('/api/cachorro/', controller.PegarTodos)
router.post('/api/cachorro', controller.Add)
router.put('/api/cachorro/:id', controller.Update)
router.delete('/api/cachorro/:id', controller.Delete)

module.exports = router