const authService = require("../authService");

const refresh = async (req, res, next) => {
	try {
		const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
		const user = await authService.refresh(token);

		return res.json({
			status: "ok",
			code: "200",
			body: user,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = refresh;


