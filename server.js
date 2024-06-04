const mongoose = require("mongoose");
const app = require("./src/app");
require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");

const { DB_HOST, PORT = 3090 } = process.env;

const devURL = "http://localhost:3000";
// const deployURL = "https://docworldbase.netlify.app/";

async function start() {
	try {
		await mongoose.connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true });

		const server = http.createServer(app);
		const io = new Server(server, {
			cors: {
				origin: devURL,
				methods: ["GET", "POST"],
				credentials: true,
			},
		});

		io.on("connection", (socket) => {
			console.log("a user connected:", socket.id);

			socket.on("disconnect", () => {
				console.log("user disconnected:", socket.id);
			});

			socket.on("chat message", (msg) => {
				console.log(msg);
				io.emit("newMessage", msg); // Broadcast to all connected clients
			});
		});

		server.listen(PORT, () => {
			console.log(`Server running. Use our API on port: ${PORT}`);
		});
	} catch (err) {
		console.log(`Server not running. Error message: ${err.message}`);
		process.exit(1);
	}
}

start();
