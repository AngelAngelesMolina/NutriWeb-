const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../ProjectDB.db",
});

exports.sequelize = sequelize;

exports.connect = async function () {
  try {
    await sequelize.authenticate();
    console.log(process.env.SERVER_PORT);
    console.log("> Conectado a la base de datos.");
  } catch (e) {
    console.error("> No fue posible conectarse a la base de datos.");
    console.error(e);
  }
};

exports.sync = async function () {
  try {
    await sequelize.sync({ force: !!+process.env.FORCE_DB_UPDATE });
    console.log(
      `> La base de datos fue ${
        !!+process.env.FORCE_DB_UPDATE ? "restablecida" : "inicializada"
      }.`
    );
  } catch (e) {
    console.error(
      `> No fue posible ${
        !!+process.env.FORCE_DB_UPDATE ? "restablecer" : "inicializar"
      } la base de datos.`
    );
    console.error(e);
  }
};
