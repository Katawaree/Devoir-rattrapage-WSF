const projectController = require("../controllers/projectController");
const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getStats
} = require("../controllers/projectController");

router.get("/", getAllProjects);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.get("/stats", projectController.getStats);


module.exports = {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getStats
};

module.exports = router;
