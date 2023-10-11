const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize');

module.exports = sequelize.define('users', {
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [2, 50],
        },
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [2, 50],
        },
    },
    nickname: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    gender: {               ///M, F,O
        type: DataTypes.CHAR(1),
        allowNull: false,
        validate: {
            esGeneroValido(value) {
                // Validación personalizada para verificar si el género es válido
                const generoValido = ['M', 'F', 'O'];
                if (!generoValido.includes(value.toUpperCase())) {
                    throw new Error('El género debe ser "M", "F" o "O"');
                }
            },
        }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: {
                args: 18,
                msg: 'Debes tener mínimo 18 años!',
            },
            max: {
                args: 100,
                msg: 'La edad máxima autorizada son 100 años!',
            },
        },
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [8, 50],
        },
    },
    telefono: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    cedulaProfesional: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
            len: [10, 200],
        },
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
            isDate: true,
        }
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
})