const express = require("express");
const router = express.Router();
const ctrlBlanks = require("./blankController");

router.post("/new", ctrlBlanks.addNewBlank);
router.get("/getAll", ctrlBlanks.getAllBlanks);
router.get("/getById/:id", ctrlBlanks.getBlankById);

module.exports = router;
