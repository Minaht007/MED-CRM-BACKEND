const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const { Doctors_HOST, Client_HOST } = process.env;
const dbURI = `${Doctors_HOST},${Client_HOST}`;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3090, () => {
      console.log("Server is running on port 3090");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

// const mongoose = require("mongoose");
// const app = require("./app");
// require("dotenv").config();

// const { Doctors_HOST, Client_HOST } = process.env;

// mongoose
//   .connect(`${Doctors_HOST},${Client_HOST}`)
//   .then(() => {
//     app.listen(3090);
//     console.log("Database connection successful");
//   })
//   .catch((error) => {
//     console.log(error.messages);
//     process.exit(1);
//   });
