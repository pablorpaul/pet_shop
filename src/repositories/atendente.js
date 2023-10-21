const Usuario = require('../models/atendente.js')
const bcrypt = require('bcrypt')

class RepositorieUsuario {


    async PegarUm(id, transaction) {
        return Usuario.findOne({
            where: { id },
            include: ['clientes'],
            transaction
        });
    }

    async PegarUmPorEmail(email) {
        return Usuario.findOne({
            where: { email }
        });
    }
    
    async PegarTodos() {
        return Usuario.findAll();
    }

    async AdicionarUsuario(usuario){
        const hashsenha = await bcrypt.hash(usuario.senha, 10)

        return Usuario.create({ ...usuario, senha: hashsenha})
    }

    async UpdateUsuario(id, usuario){
        const hashsenha = await bcrypt.hash(usuario.senha, 10)

        return Usuario.update({ ...usuario, senha: hashsenha}, { where: { id } })

    }

    async DeletarUsuario(id){

        return Usuario.destroy({
            where: {
                id
            }
        })
    }

}

module.exports = RepositorieUsuario