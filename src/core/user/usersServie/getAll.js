const UserData = require("../usersModel");

const getAll = async () => {
	const result = await UserData.find({ role: "doctor" });
	return result;
};

module.exports = getAll;
