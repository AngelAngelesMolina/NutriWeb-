const { insert, findAll, findById } = require('../services/user');

exports.createUser = async function (request, response) {
	const {age, firstName, lastName, gender, email, username, password } = request.body;
	const nuevoUsuario = await insert({age, firstName, lastName, gender, email, username, password });
	response.status(201).json(nuevoUsuario);
};

exports.getUsers = async function (request, response) {
	const usuarios = await findAll();
	response.status(200).json(usuarios);
};

exports.getUserbyId = async function (request, response) {
	const { id } = request.params;
	const usuario = await findById(id);
	response.status(200).json(usuario);
};
