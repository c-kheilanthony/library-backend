const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Library Backend is Running");
});

// ================================
// Book Model (Legacy, can be removed or retained)
// ================================
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  available: { type: Boolean, default: true },
});

const Book = mongoose.model("Book", BookSchema);

// ================================
// Inventory Routes (New)
// ================================
const inventoryRoutes = require("./routes/inventoryRoutes"); // NEW: Import the inventory routes
app.use("/api/inventory", inventoryRoutes); // NEW: Use the inventory routes

// ================================
// Books API (Optional for Legacy Code)
// ================================
app.use("/api/books", require("./routes/books"));

// ================================
// Users API
// ================================
const usersRouter = require("./routes/users");
app.use("/api/users", usersRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
