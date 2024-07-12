const blankService = require("../blankService");

const getAllblank = async (req, res, next) => {
	try {
		const blanks = await blankService.getAll();
		return res.status(200).json({
			status: "success",
			code: "200",
			result: blanks,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getAllblank;
