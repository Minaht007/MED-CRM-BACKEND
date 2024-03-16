const EventsData = require("../EventsModel");
const createError = require("http-errors");

const newEvent = async (req, token) => {
	if (token === "") {
		throw createError("Wrong Full");
	}
	const { start, title, display, date, doctorId, pacientId } = req.body;
	const newEvents = await EventsData.create({
		start,
		title,
		display,
		date,
		doctorId,
		pacientId,
	});
	return newEvents;
};

module.exports = newEvent;
