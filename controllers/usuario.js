const { creaNuevoUsuario } = require("../services/usuario.js");

exports.procesaNuevoUsuario = async function (request, response) {
  const { nombre, apellido, correo, clave } = request.body;
  const ahora = new Date();
  const usuario = await creaNuevoUsuario({
    nombre,
    apellido,
    correo,
    clave,
    ahora,
    ahora,
  });
  response.status(201).json(usuario);
};
