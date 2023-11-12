const ClientData = require("../clientModel");

const deleteClientById = id => {
  const result = ClientData.findByIdAndRemove(id);
  return result;
};

module.exports = deleteClientById;