const UsersData = require("../usersModel");
const createError = require("http-errors");

const editUserById = async (id, req, token) => {
	const user = await UsersData.findById(id);

	if (user.token !== token) {
		throw createError("Wrong Full");
	}

	if (user.role === "client") {
		const updateClient = await UsersData.findByIdAndUpdate(id, { client: req.body }, { new: true });
		return updateClient.client;
	}
	if (user.role === "doctor") {
		if (req.body.path === "schedule") {
			const updateDoctor = await UsersData.findByIdAndUpdate(
				id,
				{ doctorSchedule: req.body },
				{ new: true }
			);
			return updateDoctor.doctorSchedule;
		} else {
			const updateDoctor = await UsersData.findByIdAndUpdate(
				id,
				{ doctor: req.body },
				{ new: true }
			);
			return updateDoctor.doctor;
		}
	}
	if (user.role === "clinic") {
		const updateClinic = await UsersData.findByIdAndUpdate(id, { clinic: req.body }, { new: true });
		return updateClinic.clinic;
	}
};

module.exports = editUserById;
