const BlankData = require("../blankModel");
const createError = require("http-errors");

const newEvent = async (req, token) => {
	if (token === "") {
		throw createError("Wrong Full");
	}
	const newEvents = await BlankData.create(req.body);
	return newEvents;
};

module.exports = newEvent;
