const ClientData = require("../clientModel");

const addClient = async user => {
  const result = await ClientData.create(user);
  return result;
};

module.exports = addClient;