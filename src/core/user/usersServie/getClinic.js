const UserData = require("../usersModel");

const getAllCl = async () => {
	const result = await UserData.find({ role: "clinic" });
	return result;
};

module.exports = getAllCl;
