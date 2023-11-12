const express = require("express");
const ctrlAuth = require("./authController");

const router = express.Router();

router.post("/registration/client", ctrlAuth.registerClient);
router.post("/registration/doctor", ctrlAuth.registerDoctor);
router.post("/login", ctrlAuth.login);
router.post("/logout", ctrlAuth.logout);
router.get("/activate/:link", ctrlAuth.activate);
router.get("/refresh", ctrlAuth.refresh);


module.exports = router;