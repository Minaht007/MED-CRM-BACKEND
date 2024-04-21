const UserData = require("../usersModel");

const getAllCl = async () => {
		try {
			const results = await UserData.find({ role: "client" });

			const sanitizedResults = results.map(({ _id, baseInfo, client }) => ({
				_id,
				baseInfo,
				client,
			}));

			return sanitizedResults;
		} catch (error) {
			console.error(error);
			return [];
		}

};

module.exports = getAllCl;
