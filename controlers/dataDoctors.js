const DoctorData = require("../models/doctorSchema");
const HttpError = require("../helper/HttpError");

const getAllDoctors = async (req, res, next) => {
  const doctors = await listdoctors(req.user, req.query);
  // if (!doctors) {
  //   throw new HttpError(404, "Doctor not found");
  // }
  return res.status(200).json(doctors);
};

const addDoctor = async (req, res) => {
  const result = await DoctorData.create(req.body);
  if (!result) {
    throw new HttpError(404, "Doctor not create");
  }
  res.status(201).json(result);
};

module.exports = { addDoctor: addDoctor, getAllDoctors: getAllDoctors };

// Push
