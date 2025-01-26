import mongoose from "mongoose";

// Create the first schema in MongoDB
const CategorySchema = new mongoose.Schema({
  name: String,
});

// make it model
const CategoryModel = mongoose.model("Category", CategorySchema);

export default CategoryModel;
