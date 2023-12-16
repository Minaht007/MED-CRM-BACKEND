const UsersData = require("../../user/usersModel");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const tokenService = require("./token");

const register = async (role, email, password) => {
	const client = await UsersData.findOne({ email });
	if (client) {
		throw createError(409, `Email is already used`);
	}
	const hashPassword = await bcrypt.hash(password, 10);

	const payload = {
		email: email,
	};
	const createToken = tokenService.token(payload);

	const newClient = await UsersData.create({
		role,
		email,
		password: hashPassword,
		token: createToken,
	});
	return newClient;
};

module.exports = register;

// const mailService = require("./mail");
// const uuid = require("uuid");
// const createAuthDto = require("../dtos/authDto");

// const activationLink = uuid.v4();

// activationLink,

// await mailService.sendActivationMail(
// 	email,
// 	`${process.env.API_URL}/api/activate/${activationLink}`
// );

// const authDtoInstance = createAuthDto(newClient);
// const generateAccessToken = tokenService.accessToken({ ...authDtoInstance });
// const generateRefreshToken = tokenService.refreshToken();
// await tokenService.saveToken(createAuthDto.id, generateRefreshToken.refreshToken);

// return {
// 	...generateAccessToken,
// 	generateRefreshToken,
// 	auth: newClient,
// };
