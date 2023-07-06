const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const { Doctors_HOST, Client_HOST } = process.env;

mongoose
  .connect(`${Doctors_HOST},${Client_HOST}`)
  .then(() => {
    app.listen(3090);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.messages);
    process.exit(1);
  });
