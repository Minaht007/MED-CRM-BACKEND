const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const indexRouter = require("./routes/api/index");
const doctorRouters = require("./routes/api/doctrorRouters");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users", usersRouter);

// // Маршруты
app.use("/api/doctor", doctorRouters);

// // Mistaks
// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
//   // set locals, only providing error in development

//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

module.exports = app;
