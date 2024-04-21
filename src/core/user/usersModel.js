const { Schema, model } = require("mongoose");
const {
	DoctorSchema,
	ClientSchema,
	BaseSchema,
	ClinicSchema,
	DoctorSchedule,
} = require("./fullInfoModel");

const UsersSchema = new Schema(
	{
		email: { type: String, unique: true, required: true },
		password: { type: String, required: true },
		role: { type: String, required: true },
		baseInfo: BaseSchema,
		doctor: DoctorSchema,
		client: ClientSchema,
		clinic: ClinicSchema,
		doctorSchedule: DoctorSchedule,
		token: { type: String, required: false },
		isActivated: { type: Boolean, default: false },
		activationLink: { type: String },
	},
	{ versionKey: false, timestamps: true }
);

const UsersData = model("users", UsersSchema);

module.exports = UsersData;
