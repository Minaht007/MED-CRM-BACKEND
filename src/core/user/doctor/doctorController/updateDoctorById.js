const doctorService = require("../doctorService");
const HttpError = require("../../../../helper/HttpError");

const updateDoctorById = async (req, res) => {
	const { id } = req.params;
	const result = await doctorService.updateDoctor({ _id: id, body: req.body });
	if (!result) {
		throw new HttpError(404, "Doctor not found");
	}
	return res.status(200).json({
		status: "success",
		code: "200",
		result: result,
	});
};

module.exports = updateDoctorById;
