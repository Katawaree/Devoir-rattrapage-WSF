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
La gestion des états, les interactions dynamiques et les visualisations de données ont été les parties les plus intéressantes.
Avec plus de temps, j’aurais ajouté un système d’authentification, des tâches liées à chaque projet, et une meilleure UI, et peut-être même 
une collaboration avec la Web School Factory et les étudiants 😊

KANOUN Rayan
Devoir de rattrapage — Web School Factory
Juin 2025

