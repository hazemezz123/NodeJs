import express from "express";
import createCategory from "../services/CategoryServices.js"; // Correct import with .js extension

const router = express.Router();

// Define the route for creating a category
router.post("/", createCategory); // Use POST for creating resources

export default router;
