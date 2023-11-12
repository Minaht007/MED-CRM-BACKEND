const createError = require("http-errors");
const tokenService = require("./token");
const ClientData = require("../../user/client/clientModel");
const createAuthDto = require("../dtos/authDto");

const refresh = async (refreshToken) => {
    if(!refreshToken)
    throw createError("User is not authorized");
}
const client = tokenService.validateRefreshToken(refreshToken); 
const tokenFromDataBase = await tokenService.findToken(refreshToken);
   if(!client || !tokenFromDataBase) {
    throw createError("User is not authorized");
   }
   const user = await ClientData.findById(client.id);
   const authDtoInstance = createAuthDto(client); 
   const generateAccessToken = tokenService.accessToken({...authDtoInstance });
   const generateRefreshToken = tokenService.refreshToken();
   await tokenService.saveToken(createAuthDto.id, generateRefreshToken.refreshToken);
   return {
     ...generateAccessToken, generateRefreshToken,
     auth: createAuthDto
 }

module.exports = refresh;