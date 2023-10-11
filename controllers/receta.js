const { insert, findAll, findById } = require('../services/receta');

exports.creaReceta = async function (request, response) {
  const { nombre, foto, calorias, tiempoPreparacion } = request.body;
  const receta = await insert({
    nombre,
    foto,
    calorias,
    tiempoPreparacion,
  });
  response.status(201).json(receta);
};

exports.obtenRecetas = async function (request, response) {
  const recetas = await findAll();
  response.status(200).json(recetas);
};

exports.obtenRecetaPorId = async function (request, response) {
  const { id } = request.params;
  const receta = await findById(id);
  response.status(200).json(receta);
};
