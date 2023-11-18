const { Schema, model } = require("mongoose");

const doctorSchema = new Schema(
  {
    name: { type: String, required: true },
    secondName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: false },
    speciality: { type: String, required: false },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const DoctorData = model("Doctor", doctorSchema);

module.exports = DoctorData;