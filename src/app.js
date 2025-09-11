const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const createError = require("http-errors");
const morgan = require("morgan");
const punycode = require("punycode/");

require("dotenv").config();
const indexRouter = require("./index");
const authRouter = require("./core/auth/authRouter");
const userRouter = require("./core/user/usersRouter");
const eventRouter = require("./core/event/eventsRouter");
const messageRouter = require("./core/messager/messageRouter");
const blankRouter = require("./core/blank/blankRouter");

const app = express();

// const URL = "http://localhost:3001";
const URL = "https://docworldbase.netlify.app";

const corsOptions = {
	origin: [URL],
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
};

app.use(morgan("combined"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/api", userRouter);
app.use("/event", eventRouter);
app.use("/dialog", messageRouter);
app.use("/blank", blankRouter);

app.use((req, res) => {
	res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
	const { status = 500, message = "Server error" } = err;
	res.status(status).json({ message });
});
app.use(function (req, res, next) {
	next(createError(404));
});

module.exports = app;
