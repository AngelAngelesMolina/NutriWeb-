const Joi = require('joi');

exports.createEspecialistaSchema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    username: Joi.string().max(50).required(),
    gender: Joi.string().valid('M', 'F', 'O').required(),
    age: Joi.number().integer().min(18).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(50).required(),
    telefono: Joi.string().min(10).max(10).required(),
    cedulaProfesional: Joi.string().min(12).max(20),
    direccion: Joi.string().min(10).max(200).required(),
    createdAt: Joi.date(),
    is_active: Joi.boolean().required(),
});

exports.loginEspecialistaSchema = Joi.object({
    username: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(8).max(50).required(),
});

exports.paramsSchema = Joi.object({
    id: Joi.number().required(),
})