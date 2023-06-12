const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const { Doctors_HOST } = process.env;

mongoose
  .connect(Doctors_HOST)
  .then(() => {
    app.listen(3090);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.messages);
    process.exit(1);
  });

// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     app.listen(3000);
//     console.log("Database connection successful");
//   })
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });
