const ClientData = require("../clientModel");

const updateClientById = ({ _id, body }) => {
	const result = ClientData.findByIdAndUpdate(_id, body, { new: true });
	return result;
};

module.exports = updateClientById;
