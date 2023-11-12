const createError = require('http-errors');
const clientService = require("../clientService");

const deleteClient = async (req, res) => {
    const { _id: id } = req.user;
  
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