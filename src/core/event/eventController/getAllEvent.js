const eventService = require("../eventService");

const getAllEvent = async (req, res, next) => {
	try {
		const event = await eventService.getAll();
		return res.status(200).json({
			status: "success",
			code: "200",
			result: event,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getAllEvent;
