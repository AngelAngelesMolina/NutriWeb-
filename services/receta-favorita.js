const RecetaFavorita = require("../models/receta-favorita.js");

exports.marcaRecetaComoFavorita = function (datos) {
  return RecetaFavorita.findOrCreate({
    where: {
      id: datos.id,
    },
    defaults: datos,
  });
};

exports.encuentraRecetaFavoritaPorIdYUsuario = function (id, usuarioId) {
  return RecetaFavorita.findOne({
    where: {
      id,
      usuarioId,
    },
  });
};

exports.encuentraRecetasFavoritasPorUsuario = function (usuarioId) {
  return RecetaFavorita.findAll({
    where: {
      usuarioId,
    },
  });
};

exports.eliminaRecetaFavoritaPorId = function (id) {
  return RecetaFavorita.destroy({
    where: {
      id,
    },
  });
};
