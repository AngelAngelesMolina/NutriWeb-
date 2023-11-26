const express = require("express");
const router = express.Router();

const jwtValidator = require("../middlewares/jwt");
const validator = require("../middlewares/validator");

const {
  procesaRecetaFavorita,
  obtenRecetasFavoritas,
} = require("../controllers/receta-favorita.js");
const {
  procesaRecetaFavoritaSchema,
} = require("../validations/receta-favorita.js");

router.post(
  "/recetas-favoritas",
  jwtValidator,
  validator.body(procesaRecetaFavoritaSchema),
  procesaRecetaFavorita
);
router.get("/recetas-favoritas", jwtValidator, obtenRecetasFavoritas);

module.exports = router;
