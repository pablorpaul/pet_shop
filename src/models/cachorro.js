const Cliente = require('../models/cliente')
const Atendimento = require('../models/atendimento')
const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

const Cachorro = conexao.define('cachorros', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raca: {
        type: DataTypes.STRING,
    },
    clienteId: {
        field: 'cliente_id',
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
})

Atendimento.belongsTo(Cachorro, {foreignKey: 'cachorroId'})
Cachorro.hasMany(Atendimento, {foreignKey: 'cachorroId'})

module.exports = Cachorro