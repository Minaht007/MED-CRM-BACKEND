const clientService = require("../clientService");

const getById = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const clients = await clientService.getClientById(req.user._id);   
    if (!clients) {
      throw new HttpError(404, "Client not found");
    }
    return res.status(200).json(clients);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = getById;