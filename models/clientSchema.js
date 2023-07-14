const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const ClientData = model("client", clientSchema);

module.exports = ClientData;
