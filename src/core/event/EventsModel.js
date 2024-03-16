const { Schema, model } = require("mongoose");

const EventSchema = new Schema(
	{
		date: { type: String, required: true },
		display: { type: String, required: true },
		doctorId: { type: String, required: true },
		pacientId: { type: String, required: true },
		start: { type: String, required: true },
		title: { type: String, required: true },
		createdAt: { type: Date, default: Date.now, expires: "90d" },
	},
	{ versionKey: false, timestamps: true }
);

const EventsData = model("events", EventSchema);

module.exports = EventsData;