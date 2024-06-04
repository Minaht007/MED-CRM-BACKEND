const MessageData = require("../messageModel");

const getAll = async (id) => {

    const result = await MessageData.find({
			$or: [{ "firstPerson.id": id },{ "secondPerson.id": id }],
	});
	const sanitizedResults = result.map(({ _id, firstPerson, secondPerson }) => ({
		_id,
		firstPerson,
		secondPerson,
	}));
	return sanitizedResults;
};

module.exports = getAll;
