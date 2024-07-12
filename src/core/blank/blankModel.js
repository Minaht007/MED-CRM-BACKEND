const { required } = require("joi");
const { Schema, model } = require("mongoose");

const BlankSchema = new Schema(
	{
		title: { type: String, required: true },
		route: { type: String, required: true },
		fields: [
			{
				fieldId: { type: String, required: false },
				fieldName: { type: String, required: false },
				fieldRow: { type: Number, required: false },
			},
		],
		createdAt: { type: Date, default: Date.now },
	},
	{ versionKey: false, timestamps: true }
);

const BlankData = model("blank", BlankSchema);

module.exports = BlankData;
