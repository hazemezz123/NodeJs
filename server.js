import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import db from "./Config/DataBase.js";
import CategoryRoute from "./Routes/CategoryRoute.js"; // Correct import

// Load environment variables
dotenv.config({ path: "Config.env" });

// Connect to the database
db();

// Initialize express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Morgan logging middleware (for development)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`The mode on now is: ${process.env.NODE_ENV}`);
}

// Mount Routes
app.use("/api/v1/category", CategoryRoute); // Use the imported CategoryRoute

// Default route
app.get("/", (req, res) => {
  res.send(`
    <i>Hello world from the first route of Node.js!</i>
    <br>
  `);
});

// Define PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
