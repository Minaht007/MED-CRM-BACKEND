const doctorService = require("../doctorService");
const HttpError = require("../../../../helper/HttpError");

const getByname = async (req, res) => {
	const { id } = req.params;
	const doctor = await doctorService.getById(id);
	if (!doctor) {
		throw new HttpError(404, "Doctor not found");
	}
	return res.status(200).json({
		status: "success",
		code: "200",
		result: doctor,
	});
};

module.exports = getByname;
