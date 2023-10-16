const { DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');

module.exports = sequelize.define('receta', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      len: [2, 100],
    },
  },
  foto: {
    type: DataTypes.STRING(255),
    allowNull: true,
    validate: {
      len: [2, 255],
    },
  },
  calorias: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tiempoPreparacion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  timestamps: true,
});
