const express = require("express");
const router = express.Router();
const ctrlDialog = require("../messager/messageController");

router.post("/new", ctrlDialog.addNewDialog);
router.get("/getAll/:id", ctrlDialog.getAllDialog);
router.post("/newMessage/:id", ctrlDialog.addMessages);
router.get("/messageById/:id", ctrlDialog.getAllMessageById);


module.exports = router;
