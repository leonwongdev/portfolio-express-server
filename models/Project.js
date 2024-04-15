const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  tags: [{ type: String }],
  imageUrl: { type: String, required: true },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
