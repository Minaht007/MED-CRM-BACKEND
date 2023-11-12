const clientService = require("../clientService");
const HttpError = require("../../../../helper/HttpError");

const updateClient = async (req, res) => {
    const { name, phone } = req.body;
    const { _id: id } = req.params;
    const result = await clientService.updateClientById(
      { _id: id },
      {
        name: name,
        phone: phone,
      }
    );
    if (!result) {
      throw new HttpError(404, "Doctor not update");
    }
    return res.status(200).json(result);
  };

  module.exports = updateClient;