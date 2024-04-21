const UserData = require("../usersModel");

const getAll = async () => {
	try {
		const results = await UserData.find({ role: "doctor" });

		const sanitizedResults = results.map(({ _id, baseInfo, doctor, doctorSchedule }) => ({
			_id,
			baseInfo,
			doctor,
			doctorSchedule,
		}));

		return sanitizedResults;
	} catch (error) {
		console.error(error);
		return [];
	}
};
module.exports = getAll;
