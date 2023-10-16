const { IMC } = require("../scripts/IMC");
const {
	findAll,
	findById,
	insert,
	deleteById,
	update,
} = require("../services/pesoEntries");

exports.getEntries = async function (request, response) {
	const pesoEntries = await findAll();
	response.status(200).json(pesoEntries);
};

exports.getEntry = async function (request, response) {
	const { id } = request.params;
	const pesoEntry = await findById(id);
	if (!pesoEntry) {
		response.status(401).json({ msg: "No se encontro ese registro" })
	}
	response.status(200).json(pesoEntry);
};

exports.createEntry = async function (request, response) {
	// const { peso, estatura, imc, dieta } = request.body;
	const { peso, estatura } = request.body;
	// console.log(request.user.id); 
	// console.log(user);
	const {id:userId} = request.user; 
	const [imc, dieta] = IMC(peso, estatura);
	// console.log(IMC(peso, estatura)); 
	// console.log(peso, imc, dieta, estatura);
	const pesoEntry = await insert({ peso, estatura, imc, dieta, userId });
	response.status(201).json(pesoEntry);
};

exports.updateEntry = async function (request, response) {
	const { peso, estatura } = request.body;
	const [imc, dieta] = IMC(peso, estatura);
	const { id } = request.params;
	await update(id, { peso, estatura, imc, dieta });
	response.status(204).end();
};

exports.deleteEntry = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};