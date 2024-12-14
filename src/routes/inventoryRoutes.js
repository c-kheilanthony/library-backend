const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");

console.log("Inventory routes initialized");

// GET /api/inventory
router.get("/", (req, res) => {
  console.log("GET /api/inventory hit");
  inventoryController.getInventory(req, res);
});

// POST /api/inventory
router.post("/", (req, res) => {
  console.log("POST /api/inventory hit with body:", req.body);
  inventoryController.addInventoryItem(req, res);
});

module.exports = router;
