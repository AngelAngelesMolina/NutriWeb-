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

router.post('/receta', validator.body(schemaCreaReceta), creaReceta);
router.get('/recetas', obtenRecetas);
router.get(
  '/receta/:id',
  validator.params(schemaRecuperaReceta),
  obtenRecetaPorId
);

module.exports = router;
