Dashboard de Gestion de Projets

Projet réalisé dans le cadre du devoir de rattrapage de la Web School Factory.  
Ce tableau de bord permet de visualiser, créer et gérer des projets avec un affichage dynamique des statistiques.

---

Fonctionnalités

- Création de projet avec type, statut et nombre de tâches
- Suppression de projet
- Visualisation statistique des projets (Camembert & Courbe temporelle)
- Page d'accueil et navigation 

---

Structure du projet

Projet-WSF/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── index.js
│ ├── Dockerfile
│ └── seed.js
├── frontend/
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
├── docker-compose.yml
└── README.md

---

Installation

Pré-requis

- Node.js
- Docker + Docker Compose
- Git

Lancement manuel

bash
git clone https://github.com/Katawaree/Devoir-rattrapage-WSF

Dans un terminal copier ça: cd "Projet WSF\backend"
npm install
npm start
docker-compose up --build

terminer par ça pour le backend: node seed.js (une fois le serveur lancé)

Revenir à la racine puis coller ça: "Projet WSF\temp-frontend"
npm install
npm start


Ce projet m’a permis de renforcer mes compétences en React, Node.js, Express et Docker.
J’ai appris à gérer un backend en API REST et à connecter un frontend réactif d'une nouvelle manière en me renseignant par mes propres moyenss
La gestion des états, les interactions dynamiques et les visualisations de données ont été les parties les plus intéressantes.0
Avec plus de temps, j’aurais ajouté un système d’authentification, des tâches liées à chaque projet, et une meilleure UI, et peut-être même 
une collaboration avec la Web School Factory et les étudiants 😊


-----------------------------------------------------------------------------------------------------------------------------------------------


DOCUMENTATION  TECHNIQUE 


1  Présentation du Projet

Ce projet est une application Web permettant de gérer des projets (nom, type, statut,
nombre de tâches complétées). Elle inclut :
- Un backend Node.js avec Express et MongoDB
- Un frontend ReactJS
- Une visualisation des statistiques via des graphiques dynamiques
- Le tout dockerisé pour un déploiement simplifié


2 Architecture Technique

Projet-WSF/
├── backend/ # Serveur Express
│ ├── controllers/ # Fonctions des routes
│ ├── models/ # Schémas Mongoose
│ ├── routes/ # Routes API REST
│ ├── seed.js # Générateur de données de test
│ ├── Dockerfile # Image backend
│ └── index.js # Point d'entrée serveur
│
├── frontend/ # Interface utilisateur React
│ ├── public/ # Fichiers statiques
│ └── src/
│ ├── pages/ # Pages : Home, Dashboard, Stats
│ ├── components/# Composants réutilisables (formulaires, cartes...)
│ ├── App.js # Routes + Navigation
│ └── index.js # Entrée React
│
├── docker-compose.yml # Orchestration Docker
└── README.md


3 Backend (Node.js / Express / MongoDB)

- Base de données : MongoDB, conteneurisée via Docker
- ORM : Mongoose
- Routes REST :
 - GET /api/projects : lister les projets
 - POST /api/projects : créer un projet
 - DELETE /api/projects/:id : supprimer un projet
 - GET /api/stats : récupérer les stats (par type et par date)
- Fichier seed.js : génère 20 projets aléatoires pour les tests


4 Frontend (ReactJS)

- Librairies :
 - axios pour les appels API
 - react-router-dom pour la navigation
 - recharts pour les graphiques
- Pages :
 - Home.jsx : accueil du projet
 - Dashboard.jsx : création, affichage et suppression des projets
 - Stats.jsx : graphiques statistiques (camembert, ligne temporelle)
- Composants principaux :
 - ProjectCard.jsx : carte d’un projet
 - AddProjectForm.jsx : formulaire de création de projet


5 Dockerisation

docker-compose.yml :
services:
 backend:
 build: ./backend
 ports:
 - "3000:3000"
 depends_on:
 - mongo
 frontend:
 build: ./frontend
 ports:
 - "3001:3000"
 mongo:
 image: mongo
 ports:
 - "27017:27017"
Dockerfile (backend) :
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]


6 Statistiques (Stats.jsx)

- Camembert : pourcentage des types de projet (Web, Jeu, Data...)
- Courbe : tâches complétées par jour et par type


7 Instructions de lancement 

Manuellement :
cd backend && npm install && npm start
cd frontend && npm install && npm start
Via Docker :
docker-compose up --build


8 Test des données

cd backend
node seed.js


KANOUN Rayan
Web School Factory - Juin 2025
