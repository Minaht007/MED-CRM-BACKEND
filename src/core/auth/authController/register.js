const authService = require("../authService");

const registerNewUser = async (req, res, next) => {
	try {
		const { role, email, password } = req.body;
		const userData = await authService.register(role, email, password);

		res.status(201).json({
			status: "created Success",
			code: "201",
			body: userData,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = registerNewUser;

//res.cookie("refreshToken", userData.refreshToken, {
// 	maxAge: 30 * 24 * 60 * 1000,
// 	httpOnly: true,
// });
