const Usuario = require('../models/usuario.js')
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

    async Add(usuario, transaction) {
        const hashsenha = await bcrypt.hash(Usuario.senha, 10)

        const result = await usuario.create(
            { ...Usuario, senha: hashsenha },
            { transaction })

        return result
    }

    async Update(id, usuario) {
        const result = await usuario.update(Usuario, {
            where: {
                id
            }
        })
        return result
    }

    async Delete(id) {
        const result = await Usuario.destroy({
            where: { 
                id 
            }
        });

        return result
    }

}

module.exports = RepositorieUsuario