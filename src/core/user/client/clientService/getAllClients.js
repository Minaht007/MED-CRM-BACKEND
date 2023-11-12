const clientData = require("../../client/clientModel");

const getAllClients = async () => {
  const result = await clientData.find()
  return result;
};

module.exports = getAllClients;