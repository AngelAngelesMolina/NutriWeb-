const express = require("express");
const router = express.Router();
const { createEspecialista, getEspecialistas, getEspecialista } = require("../controllers/especialista");
const validator = require('../middlewares/validator');
const {createEspecialistaSchema, paramsSchema} = require('../validations/especialista');

router.post("/especialista", validator.body(createEspecialistaSchema), createEspecialista);
router.get("/especialistas", validator.body(createEspecialistaSchema), getEspecialistas);
router.get("/especialista/:cedula", validator.params(paramsSchema), validator.body(createEspecialistaSchema), getEspecialista);
module.exports = router;