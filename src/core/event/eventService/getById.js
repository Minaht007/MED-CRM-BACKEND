const createError = require("http-errors");

const EventsModel = require("../EventsModel");

const getAll = async (id) => {
	const result = await EventsModel.find({ doctorId: id });

	if (result.length === 0) {
		throw createError("Event not found");
	}
	return result;
};

module.exports = getAll;
