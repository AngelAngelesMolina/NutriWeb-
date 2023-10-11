const { insert, findByCedula, findAll } = require('../services/especialista');

exports.createEspecialista = async function (request, response) {
	const {cedula, adress, phone, age, firstName, lastName, gender, email, nickname, password, } = request.body;
	const user = await insert({cedula, adress, phone, age, firstName, lastName, gender, email, nickname, password });
	response.status(201).json(user);
};

exports.getEspecialistas = async function (request, response) {
	const Especialistas = await findAll();
	response.status(200).json(posts);
};

exports.getEspecialista = async function (request, response) {
	const { cedula } = request.params;
	const Especialista = await findByCedula(cedula);
	response.status(200).json(post);
};