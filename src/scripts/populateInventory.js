const mongoose = require("mongoose");
const Inventory = require("../models/Inventory");
require("dotenv").config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Sample Inventory Data
const inventoryData = [
  {
    category: ["Fiction", "Adventure"],
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    datePublished: "1937-09-21",
    isbn: "978-3-16-148410-0",
    copyIdentifier: "Copy 1",
  },
  {
    category: ["Fiction", "Adventure"],
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    datePublished: "1937-09-21",
    isbn: "978-3-16-148410-0",
    copyIdentifier: "Copy 2",
  },
  {
    category: ["Non-Fiction", "Science"],
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    datePublished: "1988-04-01",
    isbn: "978-0-553-10953-5",
    copyIdentifier: "Copy 1",
  },
];

// Insert Data
const populateInventory = async () => {
  try {
    await Inventory.insertMany(inventoryData);
    console.log("Inventory data populated successfully!");
    mongoose.disconnect(); // Disconnect after insertion
  } catch (err) {
    console.error("Error populating inventory:", err);
    mongoose.disconnect();
  }
};

populateInventory();
