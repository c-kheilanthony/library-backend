const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  category: [String], // Array of categories
  title: { type: String, required: true },
  author: { type: String, required: true },
  datePublished: { type: Date, required: true },
  isbn: { type: String, required: true },
  copyIdentifier: { type: String, required: true }, // Unique for each copy
});

module.exports = mongoose.model("Inventory", InventorySchema);
