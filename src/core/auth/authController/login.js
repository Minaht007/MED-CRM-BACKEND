const authService = require("../authService");

const loginClient = async (req, res, next) => {
  try {
  const { email, password } = req.body;
  const client = await authService.login(email, password);
  res.cookie("refreshToken", client.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
  return res.json(client);
} catch (err) {
   console.log(err)
  }
}

module.exports = loginClient;