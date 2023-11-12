const authService = require("../authService");
const tokenService = require("../authService/token");

const logoutClient = async (req, res, next) => {
  try {
  const {refreshToken} = req.cookies;
  const token = await authService.logout(refreshToken);
  res.clearCookie("refreshToken")
  return res.json(token);
} catch (err) {
   console.log(err)
  }
}

module.exports = logoutClient;