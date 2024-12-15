const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");
const upload = require("../utils/upload"); // Import the Cloudinary upload middleware

console.log("Inventory routes initialized");

// GET /api/inventory - Fetch all inventory items
router.get("/", (req, res) => {
  console.log("GET /api/inventory hit");
  inventoryController.getInventory(req, res);
});

// POST /api/inventory/add - Add a new inventory item with an image
router.post("/add", upload.single("coverImage"), (req, res) => {
  console.log("POST /api/inventory/add hit with body:", req.body);
  console.log("Uploaded file details:", req.file); // Log uploaded file details
  inventoryController.addInventoryItem(req, res);
});

module.exports = router;
