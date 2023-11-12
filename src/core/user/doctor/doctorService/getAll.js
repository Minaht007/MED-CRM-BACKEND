const DoctorData = require("../doctorModel");

const getAllDoctors = async () => {
  const result = await DoctorData.find()
  return result;
};

module.exports = getAllDoctors;