const ClientData = require("../clientModel");

const updateClientById = id => {
  const result = ClientData.findByIdAndUpdate(id);
  return result;
};

module.exports = updateClientById;