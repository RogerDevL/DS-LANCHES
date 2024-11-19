const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const Pedido = sequelize.define('Pedido', {
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    quantidade:{
        type: DataTypes.STRING,
        allowNull: false
    },
    pedidos:{
        type: DataTypes.STRING,
        allowNull: false
    },
    observacao:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{timestamps:true});



module.exports = Pedido;