const Together = require("together-ai");

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
					role: "system",
					content: `
				You are a professional family doctor.
				Your task: recommend **only** which specialist the person should see,
				based on their described symptoms.
				Always answer in 1 short sentence in the same language as the question.
				Do not explain, do not give treatment advice, do not add extra text.
				Examples:
				- "You should see a dermatologist."
				- "Consult a cardiologist."
				- "Visit a neurologist."
				- "Contact an ENT doctor."
				`,
				},
				{
					role: "user",
					content: message,
				},
			],
			temperature: 0.3,
			model: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
		});

		let aiReply = response.choices[0]?.message?.content || "";

		aiReply = aiReply.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();

		res.json({ reply: aiReply || "No answer" });
	} catch (err) {
		console.error("Error:", err);
		res.status(500).json({ error: "Generation error" });
	}
};

module.exports = aiMessage;
