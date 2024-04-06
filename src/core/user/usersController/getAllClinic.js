const userService = require("../usersServie");

const getAllClinic = async (req, res, next) => {
	try {
		const clinic = await userService.getClinic();
		return res.status(200).json({
			status: "success",
			code: "200",
			result: clinic,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getAllClinic;
