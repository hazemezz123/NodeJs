import CategoryModel from "../models/CategoryModel.js";

const createCategory = async (req, res) => {
  const { name } = req.body;

  // Input validation
  if (!name) {
    return res.status(400).json({ message: "Category name is required" });
  }

  try {
    // Create a new category
    const newCategory = new CategoryModel({ name });
    const savedCategory = await newCategory.save(); // Save to the database

    // Send the saved category as a response
    res.status(201).json(savedCategory);
  } catch (err) {
    // Handle errors
    console.error("Error creating category:", err);
    res
      .status(500)
      .json({ message: "Failed to create category", error: err.message });
  }
};

export default createCategory;
