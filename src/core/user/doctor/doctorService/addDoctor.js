const DoctorData = require("../doctorModel");

const addDoctor = async doctor => {
  const result = await DoctorData.create(doctor);
  return result;
};

module.exports = addDoctor;