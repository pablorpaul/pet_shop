const Cachorro = require('../models/cachorro')
const Usuario = require('./atendente')
const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

const Cliente = conexao.define('clientes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
    },
    usuarioId: {
        field: 'usuario_id',
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false
})

Cachorro.belongsTo(Cliente, { foreignKey: 'clienteId' })
Cliente.hasMany(Cachorro, { foreignKey: 'clienteId' })

module.exports = Cliente