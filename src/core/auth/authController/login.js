const authService = require("../authService");

const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await authService.login(email, password);

		res.json({
			status: "ok",
			code: "200",
			body: user,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = loginUser;

// res.cookie("refreshToken", user.refreshToken, {
// 	maxAge: 30 * 24 * 60 * 60 * 1000,
// 	httpOnly: true,
// });
