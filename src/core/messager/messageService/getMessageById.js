const MessageData = require("../messageModel");

const getMessageById = async (id) => {
    const result = await MessageData.findOne({ _id:id });
	return result.messageList;
};

module.exports = getMessageById;
