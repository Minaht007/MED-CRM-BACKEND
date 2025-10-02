const ctrlUser = require("../aiHelper/aiController");
const express = require("express");
const router = express.Router();

router.post("/chat", ctrlUser.addNewAi);
module.exports = router;
