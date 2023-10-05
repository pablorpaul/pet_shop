const Cliente = require('../models/cliente.js')

class RepositorieCliente {

    async PegarUm(id, transaction) {
        return Cliente.findOne({
            where: { id },
            transaction
        });
    }
    
    async PegarTodos() {
        return Cliente.findAll();
    }

    async Add(cliente, transaction) {
        const result = await Cliente.create(cliente, { transaction })

        return result
    }

    async Update(id, cliente) {
        const result = await Cliente.update(cliente, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Delete(id) {
        return Cliente.destroy({
            where: { id }
        });
    }

}

module.exports = RepositorieCliente