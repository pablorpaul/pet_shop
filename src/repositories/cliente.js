const Cliente = require('../models/cliente.js')
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

    async Add(cliente, transaction) {
        const hashsenha = await bcrypt.hash(cliente.senha, 10)

        const result = await Cliente.create(
            { ...cliente, senha: hashsenha },
            { transaction })

        return result
    }

    async Update(id, cliente) {
        const result = await Cliente.update(cliente, {
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

}

module.exports = RepositorieCliente