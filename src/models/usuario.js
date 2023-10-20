const Cliente = require('../models/cliente')
const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

const Usuario = conexao.define('usuarios', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
})

Cliente.belongsTo(Usuario, {foreignKey: 'usuarioId'})
Usuario.hasOne(Cliente, {foreignKey: 'usuarioId'})

module.exports = Usuario