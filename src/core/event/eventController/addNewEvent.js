const eventService = require("../eventService");

const addNewTask = async (req, res, next) => {
	const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
	try {
		const eventData = await eventService.newEvent(req, token);
		res.status(201).json({
			status: "created Success",
			code: "201",
			body: eventData,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = addNewTask;
