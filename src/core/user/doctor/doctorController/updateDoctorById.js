const doctorService = require("../doctorService");
const HttpError = require("../../../../helper/HttpError");

const updateDoctorById = async (req, res) => {
    const { name, secondName, speciality } = req.body;
    const { id } = req.params;
    const result = await doctorService.updateDoctor(
      { _id: id },
      {
        name: name,
        secondName: secondName,
        speciality: speciality,
      }
    );
    if (!result) {
      throw new HttpError(404, "Doctor not found");
    }
    return res.status(200).json(result);
  };
  
 module.exports = updateDoctorById; 