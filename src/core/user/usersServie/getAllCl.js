const UserData = require("../usersModel");

const getAllCl = async () => {
	const result = await UserData.find({ role: "client" });
	return result;
};

module.exports = getAllCl;
