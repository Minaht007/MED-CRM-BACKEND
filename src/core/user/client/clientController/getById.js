const clientService = require("../clientService");

const getById = async (req, res) => {
    const  { _id: id } = req.user;
    const clients = await clientService.getClientById(id);
    if (!clients) {
      throw new HttpError(404, "Doctor not found");
    }
    return res.status(200).json(doctors);
  };

  module.exports = getById;