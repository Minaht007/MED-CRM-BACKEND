const { string } = require("joi");
const { Schema } = require("mongoose");

const DoctorSchedule = new Schema(
	{
		doctorDaysOfWeek: [
			{
				startTime: { type: String, required: false },
				endTime: { type: String, required: false },
				daysOfWeek: { type: Array, required: false },
			},
		],
		seansTime: { type: String, required: false },
	},
	{ _id: false }
);

const DoctorSchema = new Schema(
	{
		home: { type: String, default: false },
		video: { type: String, default: false },
		speciality: { type: String, required: false },
		specialization: { type: String, required: false },
		qualification: { type: String, required: false },
		scientific: { type: String, required: false },
		experience: { type: String, required: false },
		cost: { type: String, required: false },
		about: { type: String, required: false },
		education: { type: String, required: false },
		courses: { type: String, required: false },
		associations: { type: String, required: false },
		procedures: { type: String, required: false },
		diplomas: { type: String, required: false },
		treatment: { type: String, required: false },
		info: { type: Boolean, required: false },
	},
	{ _id: false }
);

const ClientSchema = new Schema(
	{
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

const ClinicSchema = new Schema(
	{
		name: { type: String, required: false },
		logo: { type: String, required: false },
		license: { type: String, required: false },
		about: { type: String, required: false },
		revues: { type: String, required: false },
		location: { type: Array, required: false },
		network: { type: Array, required: false },
		lines: { type: Array, required: false },
		doctors: { type: Array, required: false },
	},
	{ _id: false }
);

const BaseSchema = new Schema(
	{
		name: { type: String, required: false },
		secondName: { type: String, required: false },
		photo: { type: String, required: false },
		phone: { type: String, required: false },
		male: { type: String, required: false },
		addresses: { type: String, required: false },
		sos: { type: String, required: false },
	},
	{ _id: false }
);

module.exports = {
	DoctorSchema,
	ClientSchema,
	BaseSchema,
	ClinicSchema,
	DoctorSchedule,
};
