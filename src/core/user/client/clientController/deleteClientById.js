const createError = require('http-errors');
const clientService = require("../clientService");

const deleteClient = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
    const user = await clientService.deleteClientById(id);
    if (!user) {
      throw createError(500, "Server error");
    }
  
    res.status(200).json({
      message: "User deleted successfully",
      user,
    });
  };
  module.exports = deleteClient;