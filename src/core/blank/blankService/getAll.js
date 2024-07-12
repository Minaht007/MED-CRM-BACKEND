const BlanksData = require("../blankModel");

const getAll = async () => {
	const result = await BlanksData.find();
	return result;
};

module.exports = getAll;
