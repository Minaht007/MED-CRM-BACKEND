const DoctorData = require("../models/doctorSchema");
const HttpError = require("../helper/HttpError");

const addDoctor = async (req, res) => {
  const result = await DoctorData.create(req.body);
  if (!result) {
    throw new HttpError(404, "Doctor not create");
  }
  res.status(201).json(result);
};

module.exports = { addDoctor: addDoctor };

// Push
