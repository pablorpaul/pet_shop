const Cliente = require('../models/cliente.js')
const Usuario = require('../models/atendente.js')
const bcrypt = require('bcrypt')

class RepositorieCliente {


    async PegarUm(id, transaction) {
        return Cliente.findOne({
            where: { id },
            include: ['cachorros'],
            transaction
        });
    }

    async PegarUmPorEmail(email) {
        return Cliente.findOne({
            where: { email }
        });
    }
    
    async PegarTodos() {
        return Cliente.findAll();
    }

    async Add(cliente, userid, transaction) {
        const result = await Cliente.create({...cliente, usuarioId: userid}, { transaction })

        return result
    }

    async Update(id, cliente, userid) {
        const result = await Cliente.update({...cliente, usuarioId: userid}, {
            where: {
                id
            }
        })
        return result
    }

    async Delete(id) {
        const result = await Cliente.destroy({
            where: { 
                id 
            }
        });

        return result
    }

    async AdicionarUsuario(usuario){
        const hashsenha = await bcrypt.hash(usuario.senha, 10)

        return Usuario.create({ ...usuario, senha: hashsenha})
    }

    async AtualizarUsuario(usuario, id){
        console.log(id)
        const hashsenha = await bcrypt.hash(usuario.senha, 10)

        return Usuario.update({ ...usuario, senha: hashsenha}, { where: { id } })
    }

    async DeletarUsuario(id){
        console.log(id)
        return Usuario.destroy({ where: { id } })
    }

}

module.exports = RepositorieCliente