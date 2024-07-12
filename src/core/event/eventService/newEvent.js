const EventsData = require("../EventsModel");
const createError = require("http-errors");

const newEvent = async (req, token) => {
	if (token === "") {
		throw createError("Wrong Full");
	}
	const { start, title, display, end, date, name, doctorId, pacientProblem, pacientId } = req.body;
	const newEvents = await EventsData.create({
		start,
		title,
		display,
		date,
		doctorId,
		pacientId,
		name,
		end,
		pacientProblem,
	});
	return newEvents;
};

module.exports = newEvent;
