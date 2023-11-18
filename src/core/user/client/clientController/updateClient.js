const clientService = require("../clientService");
const HttpError = require("../../../../helper/HttpError");

const updateClient = async (req, res) => {
	// if (!req.user) {
	//   return res.status(401).json({ message: 'Unauthorized' });
	// }
	const { id } = req.params;
	const result = await clientService.updateClientById({ _id: id, body: req.body });
	if (!result) {
		throw new HttpError(404, "Client not update");
	}
	return res.status(200).json({
		status: "success",
		code: "200",
		result: result,
	});
};

module.exports = updateClient;
