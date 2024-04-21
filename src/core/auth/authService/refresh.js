const createError = require("http-errors");

const UsersData = require("../../user/usersModel");

const refresh = async (token) => {
	const currentUser = await UsersData.findOne({ token });
	if (!currentUser) {
		throw createError("User is not authorized");
	}
	const { _id, email, role, isActivated, baseInfo, doctor, doctorSchedule, client, clinic } =
		currentUser;

	return {
		_id,
		email,
		role,
		isActivated,
		baseInfo,
		doctor,
		doctorSchedule,
		client,
		clinic,
	};
};

module.exports = refresh;
