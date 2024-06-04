const MessageData = require("../messageModel");
const createError = require("http-errors");

const newDialog = async (req, token) => {
	if (token === "") {
		throw createError("Wrong Full");
	}
	const { firstPerson, secondPerson } = req.body;

	const creator = await MessageData.findOne({
		$or: [{ "firstPerson.id": firstPerson.id, "secondPerson.id": secondPerson.id }],
	});

	if (creator) {
		return creator;
	} else {
		const newDialog = await MessageData.create({
			firstPerson,
			secondPerson,
		});
		return newDialog;
	}
};

module.exports = newDialog;
