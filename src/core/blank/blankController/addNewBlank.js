const blankService = require("../blankService");

const addNewBlank = async (req, res, next) => {
	const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
	try {
		const blankData = await blankService.addNew(req, token);
		res.status(201).json({
			status: "created Success",
			code: "201",
			body: blankData,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = addNewBlank;
