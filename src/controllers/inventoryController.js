const Inventory = require("../models/Inventory");

// Fetch all inventory items
exports.getInventory = async (req, res) => {
  console.log("getInventory function called");
  try {
    const inventory = await Inventory.find();
    console.log("Inventory fetched from MongoDB:", inventory); // Log the raw MongoDB response
    res.json(inventory); // Log the response being sent to the client
  } catch (err) {
    console.error("Error fetching inventory data:", err);
    res.status(500).json({ error: "Failed to fetch inventory data" });
  }
};

// Add a new inventory item
exports.addInventoryItem = async (req, res) => {
  try {
    console.log("Request file:", req.file); // Log file details for debugging

    const { category, title, author, datePublished, isbn, copyIdentifier } =
      req.body;

    const newBook = new Inventory({
      category: category.split(","), // Assuming categories are comma-separated
      title,
      author,
      datePublished,
      isbn,
      copyIdentifier,
      coverImage: req.file.path, // Cloudinary URL for the uploaded image
    });

    await newBook.save();
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    console.error("Error adding inventory item:", error);
    res.status(500).json({ error: "Failed to add book" });
  }
};
