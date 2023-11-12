const authService = require("../authService");

const registerNewDoctor = async (req, res, next) => {
     try {
        const {name, secondName, phone, email, speciality, password} = req.body;
        const userData = await authService.register(name, secondName, phone, email, speciality, password);
        res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 1000, httpOnly: true})
        res.status(201).json({
            message: 'Registration Success',
            email: userData.newDoctor.email,
        });
        return res.json(userData)
     } catch(err) {
        console.log(err);  
     } 
}

module.exports = registerNewDoctor;