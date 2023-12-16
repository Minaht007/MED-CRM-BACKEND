const userService = require("../usersServie");

const getUserById = async (req, res, next) => {
	const { id } = req.params;

	try {
		const user = await userService.getById(id);
		if (!user) {
			throw new HttpError(404, "Client not found");
		}
		return res.status(200).json({
			status: "success",
			code: "200",
			result: user,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getUserById;
