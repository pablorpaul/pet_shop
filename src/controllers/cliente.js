const ServicoCliente = require("../services/cliente")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require("../config")

const servico = new ServicoCliente()

class ControllerCliente {

    async Login(req, res){
        const { email, senha} = req.body

        const {dataValues: cliente} = await servico.PegarUmPorEmail(email)

        if(!cliente){
            res.status(401).json({ message: "Email ou senha inválidos"})
        }

        if(!(await bcrypt.compare(senha, cliente.senha))){
            res.status(401).json({ message: "Email ou senha inválidos"})
        }

        const token = jwt.sign(
            { id: cliente.id, nome: cliente.nome, email: cliente.email, telefone: cliente.telefone}
            config
        )

        res.json({
            token: token
        })
    }

    async PegarUm(req, res){
        try {
            console.log(req.params.id)
            const result = await servico.PegarUm(req.params.id)
            res.status(200).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
    
    async PegarTodos(_, res){
        try {
            const result = await servico.PegarTodos()
            res.status(200).json({
                clientes: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Add(req, res){
        try {
            const result = await servico.Add(req.body.cliente)
            res.status(201).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Update(req, res){
        try {
            const result = await servico.Update(req.params.id, req.body.cliente)
            res.status(200).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Delete(req, res){
        try {
            await servico.Delete(req.params.id)
            res.status(204).send()
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = ControllerCliente