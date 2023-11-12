const HttpError = require("../../../../helper/HttpError");
const doctorService = require("../doctorService");

const getAllDoctors = async (req, res) => {
  const nameParam = req.query.name;
  // const { name, secondName } = req.body;
  // console.log(nameParam);
  const doctors = await doctorService.getAll();
  return res.status(200).json(doctors);
};

module.exports = getAllDoctors;