const DoctorData = require("../doctorModel");

const deleteDoctorById = id => {
  const result = DoctorData.findByIdAndRemove(id);
  return result;
};

module.exports = deleteDoctorById;