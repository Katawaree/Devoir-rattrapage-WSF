const mongoose = require("mongoose");
const Project = require("./models/projectModel"); 

const seedProjects = async () => {
  try {
    const MONGO_URL =
      process.env.NODE_ENV === "production"
        ? "mongodb://mongo:27017/projetsdb"
        : "mongodb://localhost:27017/projetsdb";

    await mongoose.connect(MONGO_URL);
    console.log("Connexion Mongo établie");

    await Project.deleteMany({});
    console.log("Ancien contenu supprimé");

    const types = ["Web", "Mobile", "Jeu", "Industrial", "Data"];
    const status = ["En cours", "Terminé", "En pause"];

    const projets = Array.from({ length: 20 }).map((_, i) => {
      const daysAgo = Math.floor(Math.random() * 30);
      const createdAt = new Date();
      createdAt.setDate(createdAt.getDate() - daysAgo);

      return {
        name: `Projet ${i + 1}`,
        type: types[i % types.length],
        status: status[i % status.length],
        tasksCompleted: Math.floor(Math.random() * 15) + 1,
        createdAt,
      };
    });

    await Project.insertMany(projets);
    console.log(" +20 projets en collaboration avec la WSF ajoutés avec succès ");

    mongoose.connection.close();
  } catch (err) {
    console.error(" Erreur lors du seed :", err);
    mongoose.connection.close();
  }
};

seedProjects();
