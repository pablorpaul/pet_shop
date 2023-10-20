const ServicoUsuario = require("../services/usuario")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config.js')

const servico = new ServicoUsuario()

class ControllerUsuario {

    async Login(req, res){
        const { email, senha} = req.body

        if(!email || !senha){
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }

        const {dataValues: usuario} = await servico.PegarUmPorEmail(email)

        if(!usuario){
            res.status(401).json({ message: "Email ou senha inválidos"})
        }

        if(!(await bcrypt.compare(senha, usuario.senha))){
            res.status(401).json({ message: "Email ou senha inválidos"})
        }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email, cliente_id: usuario.cliente_id },
            config.secret
        )

        res.json({ token })
    }

    async PegarUm(req, res){
        try {
            console.log(req.params.id)
            const result = await servico.PegarUm(req.params.id)
            res.status(200).json({
                usuario: result
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
                usuarios: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Add(req, res){
        try {
            const result = await servico.Add(req.body.usuario)
            res.status(201).json({
                usuario: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Update(req, res){
        try {
            const result = await servico.Update(req.params.id, req.body.usuario)
            res.status(200).json({
                usuario: result
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

module.exports = ControllerUsuario