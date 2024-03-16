const express = require("express");
const router = express.Router();
const ctrlUser = require("../event/eventController");

router.post("/add", ctrlUser.addNewEvent);
router.get("/getAll", ctrlUser.getAllEvent);
router.get("/getById/:id", ctrlUser.getEventById);


module.exports = router;
