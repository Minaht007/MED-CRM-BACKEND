const registerClient = require("./registerClient");
const registerDoctor = require("./registerDoctor")
const login = require("./login");
const logout = require("./logout");
const activate = require("./activate");
const refresh = require("./refresh");
const googleAuth = require("./googleAuth");

module.exports = {
  registerClient,
  registerDoctor,
  login,
  logout,
  activate,
  refresh,
  googleAuth
};