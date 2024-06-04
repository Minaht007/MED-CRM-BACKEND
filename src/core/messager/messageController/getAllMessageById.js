const messageService = require("../messageService");

const getAllMessageById = async (req, res, next) => {
	const { id } = req.params;

	try {
		const dialog = await messageService.getMessageById(id);
		return res.status(200).json({
			status: "success",
			code: "200",
			result: dialog,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getAllMessageById;
