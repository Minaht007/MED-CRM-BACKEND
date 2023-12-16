const authService = require("../authService");

const logoutUser = async (req, res, next) => {
	try {
		const { id } = req.params;
		await authService.logout(id);
		res.json({
			status: "No Content",
			code: "204",
			massage: "Logout success",
		});
	} catch (error) {
		next(error);
	}
};

module.exports = logoutUser;

// const tokenService = require("../authService/token");


// const { refreshToken } = req.cookies;
// const token = await authService.logout(refreshToken);
// res.clearCookie("refreshToken");
// return res.json(token);
