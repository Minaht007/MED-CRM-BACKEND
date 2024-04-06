const getAllDoctor = require("./getAllDoctor");
const getAllClient = require("./getAllClient");
const getUserById = require("./getUserById");
const editUser = require("./editUser");
const editUsersBaseInfo = require('./editUserBaseInfo')
const getAllClinic = require("./getAllClinic");


module.exports = {
	getUserById,
	getAllClient,
	getAllDoctor,
	editUser,
	editUsersBaseInfo,
	getAllClinic,
};
