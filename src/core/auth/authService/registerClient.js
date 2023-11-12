const ClientData = require("../../user/client/clientModel");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const clientService = require("../../user/client/clientService");
const tokenService = require("./token");
const mailService = require("./mail");
const uuid = require("uuid");
const createAuthDto = require("../dtos/authDto");

const registerClient = async (name, phone, email, password) => {
    const client = await ClientData.findOne({email});
      if (client) {
       throw createError(409, `Email is already used`);
   }
const hashPassword = await bcrypt.hash(password, 10);
const activationLink = uuid.v4();
const newClient = await ClientData.create({name, phone, email, password: hashPassword, activationLink});
  await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
  const authDtoInstance = createAuthDto(newClient); 
  const generateAccessToken = tokenService.accessToken({...authDtoInstance });
  const generateRefreshToken = tokenService.refreshToken();
  await tokenService.saveToken(createAuthDto.id, generateRefreshToken.refreshToken);

   return {
    ...generateAccessToken, generateRefreshToken,
    auth: createAuthDto
   }
  }

module.exports = registerClient;



  

