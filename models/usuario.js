const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize.js");

module.exports = sequelize.define("usuarios", {
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: [2, 50],
    },
  },
  apellido: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: [2, 50],
    },
  },
  correo: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  clave: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: [8, 50],
    },
  },
});
