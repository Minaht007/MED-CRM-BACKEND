const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const activate = require("./activate");
const refresh = require("./refresh");
const googleAuth = require("./googleAuth");
const deleteUser = require("./deleteUser");

module.exports = {
	register,
	login,
	logout,
	activate,
	refresh,
	googleAuth,
	deleteUser
};