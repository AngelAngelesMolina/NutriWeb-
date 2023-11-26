/**
 * Carga la configuración del proyecto.
 */
require("dotenv").config();

/**
 * Inicializa la base de datos.
 */
const { inicializaLaBaseDeDatos } = require("./db");
inicializaLaBaseDeDatos();

/**
 * Inicializa el servidor.
 */
const express = require("express");
const app = express();

/**
 * Incluye los agentes intermedios.
 */
//const cors = require("cors");
const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

//app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://melodious-gelato-c9056b.netlify.app'); // Reemplaza con la URL de tu frontend
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.json());
app.use(validationError);
app.use(unknownError);

/**
 * Especifica las rutas.
 */
const sesionRouter = require("./routers/auth");
const usuarioRouter = require("./routers/usuario");
const recetasFavoritasRouter = require("./routers/receta-favorita");

app.use(sesionRouter);
app.use(usuarioRouter);
app.use(recetasFavoritasRouter);

/**
 * Arranca la aplicación. :)
 */
app.listen(process.env.SERVER_PORT, function () {
  console.log(
    `> La aplicación fue inicializada en el puerto ${process.env.SERVER_PORT}.`
  );
});
