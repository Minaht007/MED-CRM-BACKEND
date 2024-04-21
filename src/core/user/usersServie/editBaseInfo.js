const UsersData = require("../usersModel");
const createError = require("http-errors");

const editBaseInfo = async (id, req, token) => {
	const user = await UsersData.findById(id);

	if (user.token !== token) {
		throw createError("Wrong Full");
	}
	const updateClient = await UsersData.findByIdAndUpdate(id, { baseInfo: req.body }, { new: true });

	return updateClient.baseInfo;
};

module.exports = editBaseInfo;
