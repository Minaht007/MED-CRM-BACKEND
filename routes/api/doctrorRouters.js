const express = require("express");
const router = express.Router();

const {
  addDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctors,
  getByname,
} = require("../../controlers/dataDoctors");

router.get("/", getAllDoctors);
router.get("/:id", getByname);
router.post("/", addDoctor);
router.patch("/:id", updateDoctor);
router.delete("/:id", deleteDoctors);

module.exports = router;
