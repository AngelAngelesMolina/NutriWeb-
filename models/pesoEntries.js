const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize');

module.exports = sequelize.define('pesoEntries', {
    peso: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            min: 20,
            max: 300
        }
    },
    estatura: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            min: 0.5,
            max: 3
        }
    },
    imc: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            min: 10,
            max: 80
        }
    },
    dieta: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 20]
        }
    }
})