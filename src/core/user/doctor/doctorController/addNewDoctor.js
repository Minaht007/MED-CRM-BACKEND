const HttpError = require("../../../../helper/HttpError");
const doctorService = require("../doctorService");

const addNewDoctor = async (req, res) => {
    const result = await doctorService.addDoctor(req.body);
    // if (!result) {
    //   throw new HttpError(404, "Doctor not create");
    // }
    res.status(201).json({
			status: "created",
			code: "201",
			result: result,
		});
  };

module.exports = addNewDoctor; 