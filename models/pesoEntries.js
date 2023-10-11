const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize');

module.exports = sequelize.define('pesoEntries', {
    peso: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            isNumeric: true,
            esPesoValido(value) {
                if (value > 20 || value < 300) {
                    throw new Error('El peso debe estar entre 20 y 300 kilos');
                }
            },
        }
    },
    estatura: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            isNumeric: true,
            esEstaturaValida(value) {
                if (value > 0.5 || value < 3) {
                    throw new Error('La estatura debe estar entre 0.5 y 3 metros');
                }
            },
        }
    },
    imc: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            isNumeric: true,
            esIMCValido(value) {
                if (value > 10 || value < 200) {
                    throw new Error('El IMC debe estar entre 20 y 300 kilos');
                }
            },
        }
    },
    dieta: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            len: [6, 20]
        }
    }
})