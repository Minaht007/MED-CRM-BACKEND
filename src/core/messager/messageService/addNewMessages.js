const MessageData = require("../messageModel");
const createError = require("http-errors");

const addNewMessages = async (req, token) => {
	if (token === "") {
		throw createError("Wrong Full");
	}

	const { id } = req.params;
	const msg = req.body;

	const updateMessageList = await MessageData.findByIdAndUpdate(
		id,
		{ $push: { messageList: msg } },
		{ new: true }
	);
	

	return updateMessageList.messageList;
};

module.exports = addNewMessages;
