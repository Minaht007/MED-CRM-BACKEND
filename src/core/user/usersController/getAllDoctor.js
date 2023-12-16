const userService = require("../usersServie");

const getAllDoctor = async (req, res, next) => {
	try {
		const clients = await userService.getAll();
		return res.status(200).json({
			status: "success",
			code: "200",
			result: clients,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getAllDoctor;
