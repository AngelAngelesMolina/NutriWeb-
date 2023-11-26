const Joi = require("joi");

exports.creaUsuarioSchema = Joi.object({
  nombre: Joi.string().min(2).max(50).required(),
  apellido: Joi.string().min(2).max(50).required(),
  correo: Joi.string().min(2).max(100).email().required(),
  clave: Joi.string().min(8).max(50).required(),
  confirmaClave: Joi.string().min(8).max(50).required(),
});

exports.loginSchema = Joi.object({
  correo: Joi.string().email().required(),
  clave: Joi.string().required(),
});

exports.paramsSchema = Joi.object({
  id: Joi.number().required(),
});
