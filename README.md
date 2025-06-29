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


KANOUN Rayan
Devoir de rattrapage — Web School Factory
Juin 2025