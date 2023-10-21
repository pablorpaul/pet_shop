const ServicoCliente = require("../services/cliente")

const servico = new ServicoCliente()

class ControllerCliente {

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
            if(req.session.permissao != 2){
                throw new Error("Permissão negada")
            }
            const { usuario } = req.body
            const user = await servico.AdicionarUsuario(usuario)
            const result = await servico.Add(req.body.cliente, user.id)
            res.status(200).json({ 
                Cliente: result,
                Email: user.email,
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao adicionar" })
        }
    }

    async Update(req, res){
        try {
            const { usuario } = req.body
            const cliente = await servico.PegarUm(req.params.id)
            const user = await servico.AtualizarUsuario(usuario, cliente.usuarioId)
            const result = await servico.Update(req.params.id, req.body.cliente, user.id)
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
            const cliente = await servico.PegarUm(req.params.id)
            await servico.DeletarUsuario(cliente.usuarioId)
            await servico.Delete(req.params.id)
            res.status(204).send()
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = ControllerCliente