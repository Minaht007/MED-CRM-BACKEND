const express = require("express");
const router = express.Router();
// function import
const { addDoctor, getAllDoctors } = require("../../controlers/dataDoctors");

router.get("/", getAllDoctors);
router.post("/", addDoctor);

module.exports = router;
