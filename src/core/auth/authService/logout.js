const tokenService = require("../authService/token");

const logout = async (refreshToken) => {
  const token = await tokenService.removeToken(refreshToken);
  res.clearCookie("refreshToken")
  return token;
}

module.exports = logout;