const blankService = require("../blankService");

const getBlankById = async (req, res, next) => {
	const { id } = req.params;

	try {
		const blank = await blankService.getById(id);
		if (!blank) {
			throw new HttpError(404, "blank not found");
		}

		return res.status(200).json({
			status: "success",
			code: "200",
			result: blank,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getBlankById;
