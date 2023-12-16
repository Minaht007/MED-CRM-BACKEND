const jwt = require("jsonwebtoken");
const tokenModel = require("../tokenModel");

const { JWT_ACCESS_SECRET_KEY } = process.env;

const token = (payload) => {
	const result = jwt.sign(payload, JWT_ACCESS_SECRET_KEY, { expiresIn: "30d" });
	return result;
};






const accessToken = (payload) => {
    const result = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, {expiresIn: "15m"}) 
    return result;
}

const refreshToken = (payload) => {
    const result = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY, {expiresIn: "30d"})
    return result; 
}

const saveToken = async (clientId, refreshToken) => {
     const tokenData = await tokenModel.findOne({client: clientId})
     if (tokenData) {
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
     }
     const token = await tokenModel.create({client: clientId, refreshToken})
     return token;
}

const removeToken = async (refreshToken) => {
    const tokenData = await tokenModel.deleteOne({refreshToken})
    return tokenData;
}

const validateAccessToken = (token) => {
    try {
      const client = jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY);
      return client;
    } catch (err) {
      return null;
    }
}

const validateRefreshToken = (token) => {
    try {
        const client = jwt.verify(token, process.env.JWT_REFRESH_SECRET_KEY);
        return client;
      } catch (err) {
        return null;
      }
}

const findToken = async (refreshToken) => {
    const tokenData = await tokenModel.findOne(refreshToken) 
    return tokenData;
}

const tokenService = {
  token,
    accessToken,
    refreshToken,
    saveToken,
    removeToken,
    validateAccessToken,
    validateRefreshToken,
    findToken
};

module.exports = tokenService;