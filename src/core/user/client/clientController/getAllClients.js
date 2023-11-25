const clientService = require("../clientService");
// const HttpError = require("../../../../helper/HttpError");

const getAllClients = async (req, res, next) => {
	const clients = await clientService.getAll();
	return res.status(200).json({
		status: "success",
		code: "200",
		result: clients,
	});
};

module.exports = getAllClients;
