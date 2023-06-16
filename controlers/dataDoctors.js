const DoctorData = require("../models/doctorSchema");
const HttpError = require("../helper/HttpError");

const getAllDoctors = async (req, res) => {
  const doctors = await DoctorData.find();
  console.log(doctors);
  return res.status(200).json(doctors);
};

const addDoctor = async (res, req) => {
  const result = await DoctorData.create(req.body);
  if (!result) {
    throw new HttpError(404, "Doctor not create");
  }
  res.status(201).json(result);
};

const updateDoctor = async (res, req) => {
  const { name, secomdName, id } = req.body;
  const result = await DoctorData.findByIdAndUpdate(
    { _id: id },
    {
      name: name,
      secomdName: secomdName,
    }
  );
  if (!result) {
    throw new HttpError(404, "Doctor not update");
  }
  console.log(result);
  return res.status(200).json(result);
};

module.exports = {
  addDoctor: addDoctor,
  getAllDoctors: getAllDoctors,
  updateDoctor: updateDoctor,
};

// Push
