const pesoEntries = require("../models/pesoEntries");

exports.findAll = function () {
	return pesoEntries.findAll();
};

exports.findById = function (id) {
	return pesoEntry.findByPk(id);
};

exports.insert = function (data) {
	return pesoEntry.create(data);
};

exports.update = async function (id, data) {
	await pesoEntry.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const entry = await Post.findByPk(id);
	await entry.destroy();
};
