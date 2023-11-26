const { connect, sync } = require("./models/sequelize");

/**
 * Establece el modelado de los datos.
 */
const Usuario = require("./models/usuario");
const Receta = require("./models/receta-favorita");

exports.inicializaLaBaseDeDatos = async function () {
  /**
   * Establece las relaciones de las entidades.
   */

  // Un usuario puede marcar muchas recetas como favoritas.
  Usuario.hasMany(Receta);

  await connect();
  await sync();
};
