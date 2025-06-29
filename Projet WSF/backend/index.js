console.log("Démarrage backend...");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const projectRoutes = require("./routes/projectRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Mongo connecté");
app.listen(process.env.PORT, '0.0.0.0', () =>
  console.log(`Serveur ok, port ${process.env.PORT}`)
);
})
.catch((err) => console.error("Erreur Mongo:", err));
