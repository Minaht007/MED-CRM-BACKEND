const mongoose = require("mongoose");
const app = require("./src/app");
require("dotenv").config();


 const { DB_HOST, PORT = 3090 } = process.env;

 async function start() {
    try {
      await mongoose.connect(DB_HOST);
      app.listen(PORT, () => {
        console.log(`Server running. Use our API on port: ${PORT}`);
      });
    } catch (err) {
      console.log(`Server not running. Error message: ${err.message}`);
      process.exit(1);
    }
  }


start();





// const { PORT = 3090 } = process.env;
// async function start() {
//    try {
//      await app.listen(PORT, () => {
//        console.log(`Server running. Use our API on port: ${PORT}`);
//      });
//    } catch (err) {
//      console.log(`Server not running. Error message: ${err.message}`);
//      process.exit(1);
//    }
//  }

// start();


