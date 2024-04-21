const authService = require("../authService");

const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await authService.login(email, password);

		res.json({
			status: "ok",
			code: "200",
			body: user.token,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = loginUser;