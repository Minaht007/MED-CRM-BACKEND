const { Schema, model } = require("mongoose");

const doctorSchema = new Schema(
  {
    name: { type: String, required: true },
    secondName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    speciality: { type: String },
    specialization: {type: String},
    qualification: {type: String},
    scientific: {type: String},
    experiens: {type: String},
    price: {type: String},
    password: { type: String, required: true },
    education: { type: String, required: true },
    trainings: { type: String, required: true },
    association: { type: String, required: true },
    procedures: { type: String, required: true },
    diplomes: { type: String, required: true },
    desases: { type: String, required: true },
    departure: {type: true}
  },
  { versionKey: false, timestamps: true }
);

const DoctorData = model("doctor", doctorSchema);

module.exports = DoctorData;
