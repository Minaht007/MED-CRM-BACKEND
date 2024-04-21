const UsertData = require("../usersModel");

const getUserId = async (id) => {
	const result = await UsertData.findById(id);

		const { _id, email, role, baseInfo, doctor, clinic, client, doctorSchedule } = result;

	return { _id, email, role, baseInfo, doctor, clinic, client, doctorSchedule };
};

module.exports = getUserId;
