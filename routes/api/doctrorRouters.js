const express = require("express");
const router = express.Router();
const { addDoctor } = require("../../controlers/dataDoctors");

router.post("/", addDoctor);

module.exports = router;
