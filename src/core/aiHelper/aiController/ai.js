const Together  = require("together-ai");

const aiMessage = async (req, res) => {
	try {
		const { message } = req.body;
		if (!message) return res.status(400).json({ error: "Message not found" });
		const together = new Together({
			apiKey: process.env.TOGETHER_API_KEY,
		});

		const response = await together.chat.completions.create({
			messages: [
				{
					role: "user",
					content: message,
				},
			],
			model: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
		});

		res.json(response.choices[0].message.content);
	} catch (err) {
		console.error("Error:", err);
		res.status(500).json({ error: "Generation error" });
	}
};

module.exports = aiMessage;
