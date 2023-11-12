const clientService = require("../clientService");
const HttpError = require("../../../../helper/HttpError");

const getAll = async (req, res, next) => {
    const nameParam = req.body;
    // const { name, secondName } = req.body;
    // console.log(nameParam);
    const clients = await clientService.getAllClients();
    return res.status(200).json(clients);
};

module.exports = getAll;