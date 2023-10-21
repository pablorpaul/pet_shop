const Cachorro = require('../models/cachorro')
const conexao = require('../database.js')
const { DataTypes } = require('sequelize')

const Atendimento = conexao.define('atendimentos', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT(10,2),
        allowNull: false
    },
    concluido: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    cachorroId: {
        field: 'cachorro_id',
        type: DataTypes.INTEGER,
        references: {
            model: Cachorro,
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
})

module.exports = Atendimento