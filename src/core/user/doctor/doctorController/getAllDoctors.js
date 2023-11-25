const HttpError = require("../../../../helper/HttpError");
const doctorService = require("../doctorService");

const getAllDoctors = async (req, res) => {
  const nameParam = req.query.name;
  const doctors = await doctorService.getAll();
  return res.status(200).json({
		status: "success",
		code: "200",
		result: doctors,
	});
};

module.exports = getAllDoctors;