const ServicoUsuario = require("../services/atendente")
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
            { id: usuario.id, email: usuario.email, permissao: usuario.permissao },
            config.secret
        )

        res.json({ token })
    }

    async Add(req, res){
        try {
            if(req.session.permissao != 0){
                throw new Error("Permissão negada")
            }
            const result = await servico.Add(req.body.atendente)
            res.status(200).json({
                Email: result.email,
                Permissão: result.permissao
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao adicionar" })
        }
    }
    async Update(req, res){
        try {
            const result = await servico.Update(req.params.id, req.body.atendente)
            res.status(200).json({
                Usuarios: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao alterar" })
        }
    }
    async Delete(req, res){
        try {
            servico.Delete(req.params.id)
            res.status(200).json({
                message: "Usuário deletado com sucesso",
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao deletar" })
        }
    }

}

module.exports = ControllerUsuario