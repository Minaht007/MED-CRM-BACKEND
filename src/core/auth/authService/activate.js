const createError = require('http-errors');
const ClientData = require("../../user/client/clientModel");

const activateNewUser = async (activationLink) => {
const client = await ClientData.findOne({activationLink})
if (!clien) {
    throw createError("Incorrect activation link");
}
    client.isActivated = true;
    await client.save();
}

module.exports = activateNewUser;