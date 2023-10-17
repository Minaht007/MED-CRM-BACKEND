const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String },
    email: { type: String, required: true },
    location: { type: String },
    sex: {type: String},
    weight: {type: Number},
    height: {type: Number},
    blood: {type: String},
    rhesus: {type: String},
    allergies: {type: String},
    vaccinec: {type: String},
    genetics: {type: String},
    operations: {type: String}
  },
  { versionKey: false, timestamps: true }
);

const ClientData = model("client", clientSchema);

module.exports = ClientData;
