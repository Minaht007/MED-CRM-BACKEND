const createError = require('http-errors');
const ClientData = require("../../user/client/clientModel");
const createAuthDto = require("../dtos/authDto");
const tokenService = require("../authService/token");

const login = async (email, password) => {
  const client = await ClientData.findOne({email});
  if(!client) {
    throw createError("User with this email not found");
  }
  const passCompare = await bcrypt.compareSync(password, client.password);
  if(!passCompare) {
    throw createError("Incorrect password");
  }
  const authDtoInstance = createAuthDto(client); 
  const generateAccessToken = tokenService.accessToken({...authDtoInstance });
  const generateRefreshToken = tokenService.refreshToken();
  await tokenService.saveToken(createAuthDto.id, generateRefreshToken.refreshToken);
  return {
    ...generateAccessToken, generateRefreshToken,
    auth: createAuthDto
   }
};

module.exports = login;