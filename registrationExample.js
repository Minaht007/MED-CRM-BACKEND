// Перевірка в терміналі, чи працюють запити 

const axios = require("axios");

const loginData = {
  email: "i@gmail.com",
  password: "12345"
};

axios.post("http://localhost:3090/api/auth/login", loginData)
  .then(response => {
    console.log("Response:", response.data);
  })
  .catch(error => {
    if (error.response) {
      console.error("Error Response:", error.response.data);
      console.error("Status Code:", error.response.status);
    } else if (error.request) {
      console.error("Error Request:", error.request);
    } else {
      console.error("Error Message:", error.message);
    }
  })
  .finally(() => {
    console.log("Login Data:", loginData);
  });