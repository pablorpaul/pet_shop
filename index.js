const express = require('express')
const router_clientes = require('./src/routes/cliente.js')
const router_cachorros = require('./src/routes/cachorro.js')

const app = express()
const port = 3000

app.use(express.json())
app.use(router_clientes)
app.use(router_cachorros)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})