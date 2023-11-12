const authService = require("../authService");

const refresh = async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies;
        const client = await authService.refresh(refreshToken);
        res.cookie("refreshToken", client.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.json(client);
    } catch (err) {
        console.log(err)
    }
}

module.exports = refresh;