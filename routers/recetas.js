const express = require('express');
const router = express.Router();
const {
  creaReceta,
  obtenRecetas,
  obtenRecetaPorId,
} = require('../controllers/receta');
const validator = require('../middlewares/validator');
const {
  schemaCreaReceta,
  schemaRecuperaReceta,
} = require('../validations/receta');
const jwtValidator = require('../middlewares/jwt');


router.post('/receta', jwtValidator, validator.body(schemaCreaReceta), creaReceta);
router.get('/recetas', obtenRecetas);
router.get(
  '/receta/:id',
  validator.params(schemaRecuperaReceta),
  obtenRecetaPorId
);

module.exports = router;
