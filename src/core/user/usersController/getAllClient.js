const userService = require("../usersServie");

const getAllClient = async (req, res, next) => {
	try {
		const clients = await userService.getAllCl();
		return res.status(200).json({
			status: "success",
			code: "200",
			result: clients,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getAllClient;
