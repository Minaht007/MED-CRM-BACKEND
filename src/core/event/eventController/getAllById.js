const eventService = require("../eventService");

const getEventsById = async (req, res, next) => {
	const { id } = req.params;

	try {
		const event = await eventService.getById(id);

		return res.status(200).json({
			status: "success",
			code: "200",
			result: event,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getEventsById;
