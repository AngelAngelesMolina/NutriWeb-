const {
	findAll,
	findById,
	insert,
	deleteById,
	update,
} = require("../services/pesoEntries");

exports.getEntries = async function (request, response) {
	const pesoEntries = await findAll();
	response.status(200).json(posts);
};

exports.getEntry = async function (request, response) {
	const { id } = request.params;
	const pesoEntry = await findById(id);
	response.status(200).json(post);
};

exports.createEntry = async function (request, response) {
	const { content } = request.body;
	const pesoEntry = await insert({ content, userId: request.user.id});
	response.status(201).json(post);
};

exports.updateEntry = async function (request, response) {
	const { content } = request.body;
	const { id } = request.params;

	await update(id, { content });
	response.status(204).end();
};

exports.deleteEntry = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};