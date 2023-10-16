const { insert, findAll, findById } = require('../services/user');

exports.createUser = async function (request, response) {
	const {age, firstName, lastName, gender, email, username, password } = request.body;
	const nuevoUsuario = await insert({age, firstName, lastName, gender, email, username, password });
	response.status(201).json(nuevoUsuario);
};

exports.getUsers = async function (request, response) {
	const usuarios = await findAll();
	if(usuarios){
		response.status(200).json(usuarios);
	} else{
		response.status(400).json({msg: "Usuarios no encontrados"});
	}
};

exports.getUserbyId = async function (request, response) {
	const { id } = request.params;
	const usuario = await findById(id);
	if(usuario){
		response.status(200).json(usuario);
	} else{
		response.status(400).json({msg: "Usuario no encontrado"});
	}
};
