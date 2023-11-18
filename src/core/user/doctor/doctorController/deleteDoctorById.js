const doctorService = require("../doctorService");
const HttpError = require("../../../../helper/HttpError");

const deleteDoctorById = async (req, res) => {
    const { id } = req.params;
    const result = await doctorService.deleteDoctor({ _id: id });
    if (!result) {
      throw new HttpError(404, "Doctor not found");
    }
    return res.status(200).json({
			status: "deleted",
			code: "200",
			result: result,
		});
  };

module.exports = deleteDoctorById;