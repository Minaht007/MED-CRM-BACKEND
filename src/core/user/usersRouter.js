const express = require("express");
const router = express.Router();
const ctrlUser = require("../user/usersController");

router.get("/doctor", ctrlUser.getAllDoctor);
router.get("/client", ctrlUser.getAllClient);
router.get("/user/:id", ctrlUser.getUserById);
router.patch("/edit/:id", ctrlUser.editUser);

module.exports = router;
