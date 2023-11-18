const clientService = require("../clientService");
// const HttpError = require("../../../../helper/HttpError");

const getAllClients = async (req, res, next) => {
    const clients = await clientService.getAll();
    return res.status(200).json(clients);
};

module.exports = getAllClients;