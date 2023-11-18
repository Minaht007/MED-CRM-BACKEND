const clientService = require("../clientService");

const addNewClient = async (req, res, next) => {
	const { name, email, phone, password, secondName } = req.body;
	if (!name || !email || !password) {
		return res.status(400).json({ message: "missing required name field" });
	}
	try {
		const result = await clientService.addClient({ name, email, phone, password, secondName });
		res.status(201).json({
			status: "created",
			code: "201",
			result: result,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = addNewClient;
