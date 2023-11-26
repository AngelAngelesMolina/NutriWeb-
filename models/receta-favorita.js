const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("recetas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});
