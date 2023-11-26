const { encuentraUsuarioPorCorreo } = require("../services/usuario");
const jwt = require("jsonwebtoken");

exports.login = async function (request, response) {
  const { correo, clave } = request.body;

  const usuario = await encuentraUsuarioPorCorreo(correo);

  if (!usuario) {
    return response.status(401).json({
      message: "Usuario o contraseña inválidos.",
      message_dev: "No se encontró el usuario en la base de datos.",
      code: "ERR_AUTH",
    });
  }

  if (usuario.clave !== clave) {
    return response.status(401).json({
      message: "Usuario o contraseña inválidos.",
      message_dev: "No se encontró el usuario en la base de datos.",
      code: "ERR_AUTH",
    });
  }

  const token = jwt.sign(
    { id: usuario.id, correo: usuario.correo },
    process.env.JWT_SECRET
  );

  response.status(200).json({
    jwt: token,
  });
};
