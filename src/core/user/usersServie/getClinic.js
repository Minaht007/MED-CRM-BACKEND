const UserData = require("../usersModel");

const getAllCl = async () => {
	try {
		const results = await UserData.find({ role: "clinic" });

		const sanitizedResults = results.map(({ _id, clinic }) => ({
			clinic,
			_id,
		}));

		return sanitizedResults;
	} catch (error) {
		console.error(error);
		return [];
	}
};

module.exports = getAllCl;
