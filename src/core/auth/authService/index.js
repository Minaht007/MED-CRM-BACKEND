const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const mail = require("./mail");
const token = require("./token");
const refresh = require("./refresh");
const deletedUser = require("./deletedUser");


module.exports = {
	register,
	login,
	mail,
	token,
	logout,
	refresh,
	deletedUser,
};
