const UsersData = require("../usersModel");
const createError = require("http-errors");

const editUserById = async (id, req, token) => {
	const user = await UsersData.findById(id);

	if (user.token !== token) {
		throw createError("Wrong Full");
	}

	if (user.role === "client") {
		const updateClient = await UsersData.findByIdAndUpdate(id, { client: req.body }, { new: true });
		return updateClient;
	}
	if (user.role === "doctor") {
		const updateDoctor = await UsersData.findByIdAndUpdate(id, { doctor: req.body }, { new: true });
		return updateDoctor;
	}
};

module.exports = editUserById;
