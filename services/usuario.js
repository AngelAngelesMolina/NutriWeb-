const Usuario = require("../models/usuario.js");

exports.creaNuevoUsuario = function (datosUsuario) {
  return Usuario.create(datosUsuario);
};

exports.encuentraUsuarioPorId = function (id) {
  return Usuario.findByPk(id);
};

exports.encuentraUsuarioPorCorreo = function (correo) {
  return Usuario.findOne({
    where: {
      correo,
    },
  });
};
