const express = require("express");
const router = express.Router();

// Get users Listing
router.get("/", function (req, res, next) {
  res.send("respound with resourses");
});

module.exports = router;
