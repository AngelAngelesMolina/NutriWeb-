const pesoEntries = require("../models/pesoEntries");

exports.findAll = function () {
	return pesoEntries.findAll();
};

exports.findById = function (id) {
	return pesoEntries.findByPk(id);
};

exports.insert = function (data) {
	return pesoEntries.create(data);
};

exports.update = async function (id, data) {
	// try{
	// 	const updatedEntry = await pesoEntries.update(data, {
	// 		where: {
	// 			id,
	// 		},
	// 	});
	// 	console.log(`Filas actualizadas: ${updatedEntry}`);
	// }catch{
	// 	console.log(`No actualizadas: ${updatedEntry}`);
	// }
	await pesoEntries.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const entry = await pesoEntries.findByPk(id);
	await entry.destroy();
};
