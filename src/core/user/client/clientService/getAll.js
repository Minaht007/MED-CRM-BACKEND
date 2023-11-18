const ClientData = require("../clientModel");

const getAll = async () => {
    const result = await ClientData.find();
    return result;
};

module.exports = getAll;