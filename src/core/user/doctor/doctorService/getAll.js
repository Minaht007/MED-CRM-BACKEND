const DoctorData = require("../doctorModel");

const getAllDoctors = async (req, res) => {
  const result = await DoctorData.find()
  return res.status(200).json(doctors);
};

module.exports = getAllDoctors;