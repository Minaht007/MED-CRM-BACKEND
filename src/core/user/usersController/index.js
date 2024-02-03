const getAllDoctor = require("./getAllDoctor");
const getAllClient = require("./getAllClient");
const getUserById = require("./getUserById");
const editUser = require("./editUser");
const editUsersBaseInfo = require('./editUserBaseInfo')

module.exports = {
	getUserById,
	getAllClient,
	getAllDoctor,
	editUser,
	editUsersBaseInfo,
};
