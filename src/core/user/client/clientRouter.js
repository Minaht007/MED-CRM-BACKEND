const express = require("express");
const router = express.Router();
const ctrlClient = require("../client/clientController");

router.get("/", ctrlClient.getAllClients);
router.get("/:id", ctrlClient.getById);
router.post("/", ctrlClient.addClient);
router.patch("/:id", ctrlClient.updateClient);
router.delete("/:id", ctrlClient.deleteClientById);

module.exports = router;
