const Joi = require('joi');

exports.createUserSchema = Joi.object({
    age: Joi.number().integer().min(18).max(100),
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    username: Joi.string()
        .max(50)
        .pattern(
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
        )
        .required(),
    gender: Joi.string().length(1).valid('M', 'F', 'O').required(),
    email: Joi.string().max(100).email().required(),
    password: Joi.string().min(8).max(50).required(),
    // is_active: Joi.boolean().required(),
});

exports.loginSchema = Joi.object({
    username: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(8).max(50).required(),
})

exports.paramsSchema = Joi.object({
    id: Joi.number().required(),
})