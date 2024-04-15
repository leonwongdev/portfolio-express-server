const mongoose = require("mongoose");
// Load environment variables from .env file
require("dotenv").config();
const URI = process.env.MONGODB_URI;
console.log("Connection URI=", URI);

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};

module.exports = connectDB;
