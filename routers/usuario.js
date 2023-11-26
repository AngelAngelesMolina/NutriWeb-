const express = require("express");
const router = express.Router();

const validator = require("../middlewares/validator.js");

const { procesaNuevoUsuario } = require("../controllers/usuario.js");
const { creaUsuarioSchema } = require("../validations/usuario.js");

router.post(
  "/registro",
  validator.body(creaUsuarioSchema),
  procesaNuevoUsuario
);

module.exports = router;
