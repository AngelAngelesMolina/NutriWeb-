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
const cors = require("cors");
//app.use(cors());

const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");
// const dominiosPermitidos = [process.env.FRONTEND_URL];

// const corsOptions = {
//     origin: function (origin, callback) {
//         if(dominiosPermitidos.indexOf(origin) !== -1 ){
//             //origin de request permitido
//             callback(null, true); // error, acceso 
//         }else{
//             callback(new Error('No permitido por CORS')); 
//         }
//     }
// }
const corsOptions = {
  origin: function (origin, callback) {
      const dominiosPermitidos = ['https://melodious-gelato-c9056b.netlify.app'];

      if (dominiosPermitidos.indexOf(origin) !== -1) {
          // Origin de request permitido
          callback(null, true); // Permitir acceso
      } else {
          // Origin de request no permitido
          callback(new Error('No permitido por CORS'));
      }
  }
};

//indicar ue usamos las opciones de cors 
app.use(cors(corsOptions));

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'https://melodious-gelato-c9056b.netlify.app'); 
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });
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
