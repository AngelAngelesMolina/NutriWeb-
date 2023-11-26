const express = require("express");
const router = express.Router();

const validator = require("../middlewares/validator");

const { login } = require("../controllers/auth");
const { loginSchema } = require("../validations/usuario");

router.post("/inicia-sesion", validator.body(loginSchema), login);

module.exports = router;
