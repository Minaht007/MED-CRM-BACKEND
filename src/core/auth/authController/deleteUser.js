const authService = require("../authService");

const deleteUser = async (req, res, next) => {
	try {
        const { id } = req.params;
        
        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
		await authService.deletedUser(id, token);
		res.json({
			status: "deleted",
			code: "200",
		});
	} catch (error) {
		next(error);
	}
};

module.exports = deleteUser;
