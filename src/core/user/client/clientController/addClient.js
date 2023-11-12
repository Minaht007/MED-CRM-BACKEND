const clientService = require("../clientService")

const addNewClient = async (req, res, next) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "missing required name field" });
    }
    try {
      const result = await clientService.addClient({ name, email, phone });
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  module.exports = addNewClient;