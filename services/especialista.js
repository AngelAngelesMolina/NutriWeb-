const Especialista = require("../models/especialista");

exports.insert = function (data) {
	return Especialista.create(data);
};

exports.findByCedula = function (cedula) {
	return Especialista.findOne({
		where: {
			cedula,
		},
	});
};

exports.findAll = function () {
	return Especialista.findAll();
};