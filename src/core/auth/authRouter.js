const express = require("express");
const ctrlAuth = require("./authController");

const router = express.Router();

router.post("/register", ctrlAuth.register);
router.post("/login", ctrlAuth.login);
router.post("/logout/:id", ctrlAuth.logout);
// router.get("/activate/:link", ctrlAuth.activate);
router.get("/current", ctrlAuth.refresh);
router.delete("/delete/:id", ctrlAuth.deleteUser);

module.exports = router;
