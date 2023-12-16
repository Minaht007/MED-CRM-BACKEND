// const authService = require("../authService");

// const registerNewClient = async (req, res, next) => {
// 	try {
// 		const { role, email, password } = req.body;
// 		const userData = await authService.registerClient(role, email, password);
// 		res.cookie("refreshToken", userData.refreshToken, {
// 			maxAge: 30 * 24 * 60 * 1000,
// 			httpOnly: true,
// 		});
// 		res.status(201).json({
// 			message: "Registration Success",
// 			email: userData.newClient.email,
// 		});
// 		return res.json(userData);
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

// module.exports = registerNewClient;
