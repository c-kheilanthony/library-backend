const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  available: { type: Boolean, default: true },
});

// Check if the model already exists, and use it if so
module.exports = mongoose.models.Book || mongoose.model("Book", BookSchema);
