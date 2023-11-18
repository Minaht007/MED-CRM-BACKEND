const ClientData = require("../clientModel");

const getClientById = async (id) => {
  const result = await ClientData.findById(id)
  return result;
};

module.exports = getClientById;