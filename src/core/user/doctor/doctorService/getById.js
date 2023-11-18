const DoctorData = require("../doctorModel");

const getDoctorById = (id) => {
	const result = DoctorData.findById(id);
	return result;
};

module.exports = getDoctorById;
