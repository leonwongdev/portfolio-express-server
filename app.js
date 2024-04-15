const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Project = require("./models/Project");
const app = express();
const port = process.env.PORT || 3000;
// Load environment variables from .env file
require("dotenv").config();
// Connect to MongoDB
connectDB();

// Enable CORS for all routes
app.use(cors());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// GET endpoint to retrieve all projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
