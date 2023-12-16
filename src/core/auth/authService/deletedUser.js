const UsersData = require("../../user/usersModel");
const createError = require("http-errors");

const deletedUser = async (_id, token) => {
	const currentByToken = await UsersData.findOne({ token });
	const currentById = await UsersData.findOne({ _id });

	if (!currentByToken) {
		throw createError("User not found or you full");
	}
	if (!currentById) {
		throw createError("No id, no money, no honey");
	}
	if (currentByToken.id === currentById.id) {
		await UsersData.findByIdAndDelete({ _id });
		return;
	}
};

module.exports = deletedUser;
