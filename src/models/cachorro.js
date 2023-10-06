const Cliente = require('../models/cliente')
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

module.exports = Cachorro