const DoctorData = require("../doctorModel");

const updateDoctorById = ({_id, body})=> {
  const result = DoctorData.findByIdAndUpdate(_id, body, { new: true });
  return result;
};

module.exports = updateDoctorById;