const { Schema } = require("mongoose");

const DoctorSchema = new Schema(
	{
		name: { type: String, required: false },
		secondName: { type: String, required: false },
		foto: { type: String, required: false },
		phone: { type: String, required: false },
		male: { type: String, required: false },
		addresses: { type: String, required: false },

		home: { type: Boolean, default: false },
		video: { type: Boolean, default: false },
		speciality: { type: String, required: false },
		specialization: { type: String, required: false },
		qualification: { type: String, required: false },
		scientific: { type: String, required: false },
		experience: { type: String, required: false },
		cost: { type: String, required: false },
		schedule: { type: String, required: false },
		about: { type: String, required: false },
		education: { type: String, required: false },
		courses: { type: String, required: false },
		associations: { type: String, required: false },
		procedures: { type: String, required: false },
		diplomas: { type: String, required: false },
		treatment: { type: String, required: false },
	},
	{ _id: false }
);

const ClientSchema = new Schema(
	{
		name: { type: String, required: false },
		secondName: { type: String, required: false },
		foto: { type: String, required: false },
		phone: { type: String, required: false },
		male: { type: String, required: false },
		addresses: { type: String, required: false },

		weight: { type: String, required: false },
		height: { type: String, required: false },
		blood: { type: String, required: false },
		rhesus: { type: String, required: false },
		allergies: { type: String, required: false },
		vaccines: { type: String, required: false },
		administrativeDocument: { type: String, required: false },
		familyIllnesses: { type: String, required: false },
		documents: { type: String, required: false },
		surgeryHistory: { type: String, required: false },
	},
	{ _id: false }
);

module.exports = {
	DoctorSchema,
	ClientSchema,
};
