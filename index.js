const express = require('express')
const router_atendente = require('./src/routes/atendente.js')
const router_clientes = require('./src/routes/cliente.js')
const router_cachorros = require('./src/routes/cachorro.js')
const router_atendimento = require('./src/routes/atendimento.js')


const app = express()
const port = 3000

app.use(express.json())
app.use(router_atendente)
app.use(router_clientes)
app.use(router_cachorros)
app.use(router_atendimento)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})