const EventsData = require("../EventsModel");

const getAll = async () => {
	const result = await EventsData.find();
	return result;
};

module.exports = getAll;
