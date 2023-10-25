const { Schema, model } = require("mongoose");

const doctorSchema = new Schema(
  {
    name: { type: String },
    secondName: { type: String },
    email: { type: String, unique: true },
    phone: { type: String },
    speciality: { type: String },
    specialization: {type: String},
    qualification: {type: String},
    scientific: {type: String},
    experiens: {type: String},
    price: {type: String},
    password: { type: String  },
    education: { type: String },
    trainings: { type: String },
    association: { type: String },
    procedures: { type: String },
    diplomes: { type: String },
    desases: { type: String },
    departure: {type: Boolean},
    video: {type: Boolean},
    role: {type: []}
  },
  { versionKey: false, timestamps: true }
);

const DoctorData = model("doctor", doctorSchema);

module.exports = DoctorData;
