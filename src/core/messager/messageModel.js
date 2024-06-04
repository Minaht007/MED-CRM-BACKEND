const { required } = require("joi");
const { Schema, model } = require("mongoose");

const MessageSchema = new Schema(
	{
		firstPerson: {
			name: { type: String, required: true },
			secondName: { type: String, required: true },
			userPhoto: { type: String, required: false },
			id: { type: String, required: true },
		},
		secondPerson: {
			name: { type: String, required: true },
			secondName: { type: String, required: true },
			userPhoto: { type: String, required: false },
			id: { type: String, required: true },
		},
		messageList: [
			{
				message: { type: String, required: false },
				autor: { type: String, required: false },
			},
		],

		createdAt: { type: Date, default: Date.now },
	},
	{ versionKey: false, timestamps: true }
);

const MessagesSchema = model("dialog", MessageSchema);

module.exports = MessagesSchema;
