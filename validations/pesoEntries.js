const Joi = require('joi');

exports.createEntrySchema = Joi.object({
    peso: Joi.number().required().min(20).max(300)
        .error(new Error('El peso debe estar entre 20 y 300 kilos')),

    estatura: Joi.number().required().min(0.5).max(3)
        .error(new Error('La estatura debe estar entre 0.5 y 3 metros')),

    imc: Joi.number().required().min(10).max(200)
        .error(new Error('El IMC debe estar entre 10 y 200')),

    dieta: Joi.string().required().min(6).max(20).regex(/^[a-zA-Z]+$/)
        .error(new Error('La dieta debe ser una cadena alfabética de 6 a 20 caracteres')),
});

exports.updateEntrySchema = Joi.object({
    peso: Joi.number().required().min(20).max(300)
        .error(new Error('El peso debe estar entre 20 y 300 kilos')),

    estatura: Joi.number().required().min(0.5).max(3)
        .error(new Error('La estatura debe estar entre 0.5 y 3 metros')),

    imc: Joi.number().required().min(10).max(200)
        .error(new Error('El IMC debe estar entre 10 y 200')),

    dieta: Joi.string().required().min(6).max(20).regex(/^[a-zA-Z]+$/)
        .error(new Error('La dieta debe ser una cadena alfabética de 6 a 20 caracteres')),
});

exports.paramsSchema = Joi.object({
    id: Joi.number().required(),
})