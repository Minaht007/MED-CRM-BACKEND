// const tokenService = require("../authService/token");
const UsersData = require("../../user/usersModel");

const logout = async (id) => {
	await UsersData.findByIdAndUpdate(id, { token: "" });
	return;
};

module.exports = logout;

// const logout = async (refreshToken) => {
//   const token = await tokenService.removeToken(refreshToken);
//   res.clearCookie("refreshToken")
//   return token;
// }
