const { Schema, model } = require("mongoose");

const ClientSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
  },
  { versionKey: false, timestamps: true }
);

const ClientData = model("Client", ClientSchema);

module.exports = ClientData;