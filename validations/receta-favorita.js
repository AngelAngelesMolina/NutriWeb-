const Joi = require("joi");

exports.procesaRecetaFavoritaSchema = Joi.object({
  id: Joi.number().integer().min(0).required(),
});

exports.parametrosSchema = Joi.object({
  id: Joi.number().required(),
});
