const { insert, findByCedula, findAll } = require('../services/especialista');

exports.createEspecialista = async function (request, response) {
	const {cedulaProfesional, direccion, telefono, age, firstName, lastName, gender, email, username, password, } = request.body;
	const user = await insert({cedulaProfesional, direccion, telefono, age, firstName, lastName, gender, email, username, password });
	response.status(201).json(user);
};

exports.getEspecialistas = async function (request, response) {
	const especialistas = await findAll();
	response.status(200).json(especialistas);
};

exports.getEspecialista = async function (request, response) {
	const { cedula } = request.params;
	const especialista = await findByCedula(cedula);
	response.status(200).json(especialista);
};