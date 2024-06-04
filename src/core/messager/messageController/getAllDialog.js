const messageService = require("../messageService");

const getAllDialog = async (req, res, next) => {
	const { id } = req.params;

	try {
		const dialog = await messageService.getAll(id);
		console.log(dialog);
		return res.status(200).json({
			status: "success",
			code: "200",
			result: dialog,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getAllDialog;
