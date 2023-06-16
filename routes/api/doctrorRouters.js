const express = require("express");
const router = express.Router();
// function import
const {
  addDoctor,
  getAllDoctors,
  updateDoctor,
} = require("../../controlers/dataDoctors");

router.get("/", getAllDoctors);
router.post("/", addDoctor);
router.patch("/", updateDoctor);

// console.log(router);

module.exports = router;
