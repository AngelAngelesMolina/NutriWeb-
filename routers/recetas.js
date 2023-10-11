const express = require('express');
const router = express.Router();
const {
  creaReceta,
  obtenRecetas,
  obtenRecetaPorId,
} = require('../controllers/receta');
const validator = require('../middlewares/validator');
const { schemaCreaReceta, paramsSchema } = require('../validations/receta');

router.post('/receta', validator.body(schemaCreaReceta), creaReceta);
router.get('/recetas', validator.body(schemaCreaReceta), obtenRecetas);
router.get(
  '/receta/:id',
  validator.params(paramsSchema),
  validator.body(schemaCreaReceta),
  obtenRecetaPorId
);

module.exports = router;
