const ClientData = require("../models/clientSchema");

const getAllClient = async (req, res) => {
  const nameParam = req.body;
  // const { name, secondName } = req.body;
  // console.log(nameParam);
  const doctors = await ClientData.find();
  return res.status(200).json(doctors);
};

const getByname = (req, res) => {
  const { name } = req.params;
  const doctors = ClientData.find({ name: name });
  if (!doctors) {
    throw new HttpError(404, "Doctor not found");
  }
  return res.status(200).json(doctors);
};

const addClient = async (req, res) => {
  try {
    const result = await ClientData.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error creating client", error });
  }
};

const updateClient = async (req, res) => {
  const { name, phone } = req.body;
  const { _id: id } = req.params;
  const result = await ClientData.findByIdAndUpdate(
    { _id: id },
    {
      name: name,
      phone: phone,
    }
  );
  if (!result) {
    throw new HttpError(404, "Doctor not update");
  }
  return res.status(200).json(result);
};

const deleteClient = async (req, res) => {
  const { _id: id } = req.params;
  const result = await ClientData.findByIdAndDelete({ _id: id });
  if (!result) {
    throw new HttpError(404, "Doctor not delete");
  }
  return res.status(200).json(result);
};

module.exports = {
  allClient: getAllClient,
  getByname: getByname,
  addClient: addClient,
  updateClient: updateClient,
  deleteClient: deleteClient,
};
