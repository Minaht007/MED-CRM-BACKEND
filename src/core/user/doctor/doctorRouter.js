const express = require("express");
const router = express.Router();
const ctrlDoctor = require("../doctor/doctorController");

router.get("/", ctrlDoctor.getAllDoctors);
router.get("/:id", ctrlDoctor.getDoctorById);
router.post("/", ctrlDoctor.addNewDoctor);
router.patch("/:id", ctrlDoctor.updateDoctorById);
router.delete("/:id", ctrlDoctor.deleteDoctorById);

module.exports = router;