const DoctorData = require("../doctorModel");

const updateDoctorById = id => {
  const result = DoctorData.findByIdAndUpdate(id);
  return result;
};

module.exports = updateDoctorById;