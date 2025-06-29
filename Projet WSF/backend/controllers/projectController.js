const Project = require("../models/projectModel");

// Pour GET les Projets
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Pour POST
const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Pour PUT
const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Pour DELETE
const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Projet supprimé" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Pour GET les stats
const getStats = async (req, res) => {
  try {
    const total = await Project.countDocuments();

    const byType = await Project.aggregate([
      { $group: { _id: "$type", count: { $sum: 1 } } }
    ]);

    const allTypes = ["Web", "Mobile", "Jeu", "Data", "Industrial"];

    const rawStats = await Project.aggregate([
      {
        $group: {
          _id: {
            date: {
              $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
            },
            type: "$type"
          },
          total: { $sum: "$tasksCompleted" }
        }
      },
      {
        $group: {
          _id: "$_id.date",
          types: {
            $push: {
              k: "$_id.type",
              v: "$total"
            }
          }
        }
      },
      {
        $project: {
          _id: 1,
          byType: { $arrayToObject: "$types" }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    const completedByDate = rawStats.map(item => {
      const filled = { _id: item._id };
      allTypes.forEach(type => {
        filled[type] = item.byType[type] || 0;
      });
      return filled;
    });

    res.json({
      total,
      byType,
      completedByDate
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getStats
};
