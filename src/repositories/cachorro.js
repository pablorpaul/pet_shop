const Cachorro = require('../models/cachorro.js')

class RepositorieCachorro {

    async PegarUm(id, transaction) {
        return Cachorro.findOne({
            where: { id },
            transaction
        });
    }
    
    async PegarTodos() {
        return Cachorro.findAll();
    }

    async Add(cachorro, transaction) {
        const result = await Cachorro.create(cachorro, { transaction })

        return result
    }

    async Update(id, cachorro) {
        const result = await Cachorro.update(cachorro, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Delete(id) {
        return Cachorro.destroy({
            where: { id }
        });
    }

}

module.exports = RepositorieCachorro