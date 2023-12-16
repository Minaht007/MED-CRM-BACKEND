const userService = require("../usersServie");

const editUser = async (req, res) => {
	const { id } = req.params;
	const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
	try {
		const user = await userService.editUserById(id, req, token);
		return res.status(200).json({
			status: "success",
			code: "200",
			result: user,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = editUser;
