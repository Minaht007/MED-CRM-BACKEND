const UsertData = require("../usersModel");

const getUserId = async (id) => {
	const result = await UsertData.findById(id);
	return result;
};

module.exports = getUserId;
