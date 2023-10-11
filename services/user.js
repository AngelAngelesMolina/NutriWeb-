const User = require("../models/user");

exports.insert = function (data) {
	return User.create(data);
};

exports.findById = function (id) {
	return User.findByPk(id);
}

exports.findAll = function () {
	return User.findAll();
};