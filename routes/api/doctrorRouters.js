const express = require("express");
const router = express.Router();
// function import
const {
  addDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctors,
  getByname,
} = require("../../controlers/dataDoctors");

router.get("/", getAllDoctors);
router.get("/:name", getByname);
router.post("/", addDoctor);
router.patch("/:id", updateDoctor);
router.delete("/:id", deleteDoctors);

module.exports = router;
