const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 3200;

// MongoDB connection string (use environment variables in production)
const mongoURI =
  "mongodb+srv://hazemezz:zv6aulxE5IomPPbi@cluster0.nqqe8.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server after successful MongoDB connection
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Serve static files from the "views" directory
app.use(express.static(path.join(__dirname, "views")));

// Route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
