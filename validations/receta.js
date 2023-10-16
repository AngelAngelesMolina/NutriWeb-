const Joi = require('joi');

exports.schemaCreaReceta = Joi.object({
  nombre: Joi.string().min(2).max(100).required(),
  foto: [Joi.string().min(2).max(255).optional(), Joi.allow(null)],
  calorias: Joi.number().integer().min(0).max(10000),
  tiempoPreparacion: Joi.number().integer().min(0).max(10000),
});

exports.schemaRecuperaReceta = Joi.object({
  id: Joi.number().required(),
});
