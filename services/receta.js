const Receta = require('../models/receta');

exports.insert = function (data) {
  return Receta.create(data);
};

exports.findById = function (id) {
  return Receta.findByPk(id);
};

exports.findAll = function () {
  return Receta.findAll();
};
