const express = require('express');
const router = express.Router();
const { login, loginEspecialista } = require('../controllers/auth');
const validator = require('../middlewares/validator');
const {loginSchema} = require ('../validations/user');
const {loginEspecialistaSchema} = require ('../validations/especialista');

router.post('/login', validator.body(loginSchema), login);
router.post('/loginEspecialista', validator.body(loginEspecialistaSchema), loginEspecialista);

module.exports = router;