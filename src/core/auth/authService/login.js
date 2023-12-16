const bcrypt = require("bcrypt");
const createError = require("http-errors");
const UsersData = require("../../user/usersModel");
const tokenService = require("./token");

const login = async (email, password) => {
	const client = await UsersData.findOne({ email });
	if (!client) {
		throw createError("User with this email not found");
	}

	const passCompare = await bcrypt.compareSync(password, client.password);

	if (!passCompare) {
		throw createError("Incorrect password");
	}

	const payload = {
		id: client.id,
	};

	const token = tokenService.token(payload);
	return await UsersData.findByIdAndUpdate(client.id, { token }, { new: true });
};

module.exports = login;

// const createAuthDto = require("../dtos/authDto");
// const tokenService = require("../authService/token");

// const authDtoInstance = createAuthDto(client);
// const generateAccessToken = tokenService.accessToken({ ...authDtoInstance });
// const generateRefreshToken = tokenService.refreshToken({ ...authDtoInstance });
// await tokenService.saveToken(createAuthDto.id, generateRefreshToken.refreshToken);
// return {
// 	// ...generateAccessToken,
// 	// generateRefreshToken,
// 	auth: createAuthDto,
// };
