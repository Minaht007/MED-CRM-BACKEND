const express = require("express");
const cors = require("cors");
const path = require("path");
const createError = require("http-errors");

require("dotenv").config();

const indexRouter = require("./routes/api/index");
const usersRouter = require("./routes/api/users");

const doctorRouters = require("./routes/api/doctrorRouters.js");
const clientRouters = require("./routes/api/clienrRouters.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// // Маршруты
app.use("/api/doctor", doctorRouters);
app.use("/api/client", clientRouters);

// // Mistaks
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
app.use(function (req, res, next) {
  next(createError(404));
});

// ...

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
