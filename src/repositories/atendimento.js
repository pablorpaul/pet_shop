const Atendimento = require('../models/atendimento')
const sequelize = require('sequelize');

class RepositorieAtendimento {

    async PegarUm(id, transaction) {
        return Atendimento.findOne({
            where: { id },
            include: ['cachorro'],
            transaction
        });
    }

    async PegarPorData(id, transaction) {
        let date = new Date().toJSON().slice(0, 10)
        return Atendimento.findAll({
            where: { data: { [sequelize.Op.lt]: date}, '$cachorro.id$':  id  },
            include: ['cachorro'],
            
            
            transaction
        });
    }
    
    async PegarTodos() {
        return Atendimento.findAll();
    }

    async Add(atendimento, transaction) {
        const result = await Atendimento.create(atendimento, { transaction })

        return result
    }

    async Update(id, atendimento) {
        const result = await Atendimento.update(atendimento, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Delete(id) {
        return Atendimento.destroy({
            where: { id }
        });
    }

}

module.exports = RepositorieAtendimento