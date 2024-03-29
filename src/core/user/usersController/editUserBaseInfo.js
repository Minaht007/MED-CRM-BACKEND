const userService = require("../usersServie");

const editUserBaseInfo = async (req, res) => {
	const { id } = req.params;
	const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
	try {
		const user = await userService.editBaseInfo(id, req, token);
		return res.status(200).json({
			status: "success",
			code: "200",
			result: user,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = editUserBaseInfo;
