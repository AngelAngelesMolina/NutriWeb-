const {
  marcaRecetaComoFavorita,
  encuentraRecetaFavoritaPorIdYUsuario,
  encuentraRecetasFavoritasPorUsuario,
  eliminaRecetaFavoritaPorId,
} = require("../services/receta-favorita.js");

exports.procesaRecetaFavorita = async function (request, response) {
  const { id } = request.body;

  const recetaFavoritaExiste = await encuentraRecetaFavoritaPorIdYUsuario(
    id,
    request.user.id
  );

  if (!recetaFavoritaExiste) {
    const recetaFavoritaGuardada = await marcaRecetaComoFavorita({
      id,
      usuarioId: request.user.id,
    });
    response.status(201).json(recetaFavoritaGuardada);
  } else {
    const recetaFavoritaEliminada = await eliminaRecetaFavoritaPorId(id);
    response.status(200).json(recetaFavoritaEliminada);
  }
};

exports.obtenRecetasFavoritas = async function (request, response) {
  const recetasFavoritas = await encuentraRecetasFavoritasPorUsuario(
    request.user.id
  );
  response.status(200).json(recetasFavoritas);
};
