const createError = require("http-errors");

const BlankModel = require("../blankModel");

const getAll = async (id) => {
	const result = await BlankModel.find({ _id: id });

	if (result.length === 0) {
		throw createError("Blank not found");
	}
	return result[0];
};

module.exports = getAll;
