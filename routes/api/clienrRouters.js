const express = require("express");
const router = express.Router();
const {
  allClient,
  getByname,
  addClient,
  updateClient,
  deleteClient,
} = require("../../controlers/clientBase");

router.get("/", allClient);
router.get("/:name", getByname);
router.post("/", addClient);
router.patch("/:id", updateClient);
router.delete("/:id", deleteClient);

module.exports = router;
