const { Schema, model } = require("mongoose");

const doctorSchema = new Schema({
  name: { type: String, required: true },
  secondName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
});

const DoctorData = model("doctorData", doctorSchema);

module.exports = DoctorData;
