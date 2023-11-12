const registerClient = require("./registerClient");
const registerDoctor = require("./registerDoctor"); 
const login = require("./login");
const logout = require("./logout");
const mail = require("./mail");
const token = require("./token");

module.exports = {
  registerClient,
  registerDoctor,
  login,
  mail,
  token,
  logout
};