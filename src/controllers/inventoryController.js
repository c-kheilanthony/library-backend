const Inventory = require("../models/Inventory");

// Fetch all inventory items
exports.getInventory = async (req, res) => {
  console.log("getInventory function called");
  try {
    const inventory = await Inventory.find();
    console.log("Inventory fetched successfully:", inventory);
    res.json(inventory);
  } catch (err) {
    console.error("Error fetching inventory data:", err);
    res.status(500).json({ error: "Failed to fetch inventory data" });
  }
};

// Add a new inventory item
exports.addInventoryItem = async (req, res) => {
  console.log("addInventoryItem function called with body:", req.body);
  try {
    const newItem = new Inventory(req.body);
    const savedItem = await newItem.save();
    console.log("Inventory item added successfully:", savedItem);
    res.status(201).json(savedItem);
  } catch (err) {
    console.error("Error adding inventory item:", err);
    res.status(500).json({ error: "Failed to add inventory item" });
  }
};
