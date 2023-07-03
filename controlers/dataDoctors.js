const DoctorData = require("../models/doctorSchema");
const HttpError = require("../helper/HttpError");

const getAllDoctors = async (req, res) => {
  const nameParam = req.query.name;
  // const { name, secondName } = req.body;
  // console.log(nameParam);
  const doctors = await DoctorData.find();
  return res.status(200).json(doctors);
};
const getByname = (req, res) => {
  const { name, secondName } = req.query;
  const doctors = DoctorData.find({ name: name, secondName: secondName });
  if (!doctors) {
    throw new HttpError(404, "Doctor not found");
  }
  return res.status(200).json(doctors);
};

const addDoctor = async (res, req) => {
  const result = await DoctorData.create(req.body);
  // if (!result) {
  //   throw new HttpError(404, "Doctor not create");
  // }
  res.status(200).json(result);
};

const updateDoctor = async (req, res) => {
  const { name, secomdName, id } = req.params;
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
  return res.status(200).json(result);
};

const deleteDoctors = (req, res) => {
  const { id } = req.body;
  const result = DoctorData.findByIdAndDelete({ _id: id });
  if (!result) {
    throw new HttpError(404, "Doctor not delete");
  }
  return res.status(200).json(result);
};

module.exports = {
  addDoctor: addDoctor,
  getAllDoctors: getAllDoctors,
  updateDoctor: updateDoctor,
  deleteDoctors: deleteDoctors,
  getByname: getByname,
};

// Push
