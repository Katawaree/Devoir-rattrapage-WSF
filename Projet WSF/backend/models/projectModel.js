const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, enum: ["En cours", "Terminé", "En pause"], default: "En cours" },
  createdAt: { type: Date, default: Date.now },
  tasksCompleted: { type: Number, default: 0 }
});

module.exports = mongoose.model("Project", projectSchema);
