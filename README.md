# bookshelf

# 📋 **DOCUMENTATION - BOOKSHELF EDITIONS**
## 🏢Description

**Bookshelf Editions** est une application web et web mobile composée d'un site vitrine d'une maison d'édition et d'un espace d'administration pour gérer son contenu.

Le projet est structuré en **client (React)** + **serveur (API REST Express)**, avec une stratégie
de persistance **polyglotte** : **MySQL** (données relationnelles) et **MongoDB** (messages de contact).

## ⚙ Fonctionnalités

- **Espace public** : Accueil, catalogue, Agenda, infos, login, Contact
- **Authentification** : inscription + connexion
- **Espace admin** (`/admin`) :
- CRUD Livres
- **Sécurité** : contrôle d’accès par rôle `admin` via JWT + middleware d’autorisation

## 🏗️ Technologies (stack)

### 🎨Frontend
- React + TypeScript + Vite
- React Router (routing)
- CSS Modules

### Backend
- Node.js + Express + TypeScript
- JWT : `jose`
- Hash des mots de passe : `argon2`
- Validation : `zod`
- Upload fichiers : `multer` + `file-type`

### 🗄️ Bases de données
- MySQL (relationnel)
- MongoDB (NoSQL, collection `contact`)

### Qualité
- Tests : Vitest + Supertest
- CI : GitHub Actions

## Installation & lancement (Docker)

### Pré-requis
- Installer [Docker](https://www.docker.com/)

### Démarrer les services (dev)

```bash
docker compose -f docker-compose.dev.yaml up -d
```

### Lancer le projet (dans le conteneur `app` ou en local)

Le code applicatif se trouve dans `code/`.

```bash
cd code
npm install
```

- **Frontend (Vite)** :

```bash
npm run dev
```

- **Backend (API Express)** :

```bash
npm run server
```

## 🔧 Variables d’environnement

Les fichiers existent déjà :
- `code/.env.development` (développement)
- `code/.env.test` (tests)

Exemples de variables :
- `PORT=3000`
- `VITE_API_URL=http://127.0.0.1:3000`
- `ORIGINS=http://127.0.0.1:5173,http://localhost:5173`
- `MYSQL_HOST=mysql`, `MYSQL_DATABASE=publishinghouse`
- `MONGODB_HOST=mongodb`, `MONGODB_DATABASE=publishinghouse_dev`
- `VITE_JWT_SECRET=secret`

## Procédure de test

Depuis `code/` :

```bash
npm run test
```

Couverture (si besoin) :

```bash
npm run test:coverage
```

Les rapports de couverture HTML sont générés dans `code/tests/coverage/`.

## Points d’accès (endpoints) de l’API REST

Toutes les routes backend sont préfixées par `/api`.

### Authentification

Méthode HTTP | Route | Description
---|---|---
POST | `/api/register` | Inscription d’un utilisateur
POST | `/api/login` | Connexion d’un utilisateur

### Homepage 

Méthode HTTP | Route | Description
---|---|---
GET | `/api/` | Réponse simple (vérifier que l’API répond)

### Livres (MySQL + upload image)

Méthode HTTP | Route | Description
---|---|---
GET | `/api/book` | Lister les livres
GET | `/api/book/:id` | Détail d’un livre
POST | `/api/book` | Créer un livre + upload image (**admin**, JWT)
PUT | `/api/book` | Modifier un livre + upload image (**admin**, JWT)
DELETE | `/api/book` | Supprimer un livre (**admin**, JWT)

### Categories (MySQL)

Méthode HTTP | Route | Description
---|---|---
GET | `/api/category` | Lister les catégories
GET | `/api/category/:id` | Détail d’une catégorie

### Etats (MySQL + upload image)

Méthode HTTP | Route | Description
---|---|---
GET | `/api/currentstate` | Lister les états
GET | `/api/currentstate/:id` | Détail d’un état


### Auteurs (MySQL)

Méthode HTTP | Route | Description
---|---|---
GET | `/api/author` | Lister les auteurs
GET | `/api/author/:id` | Détail d’un auteur

### Evènements (MySQL)

Méthode HTTP | Route | Description
---|---|---
GET | `/api/centre_formation` | Lister les centres de formation
GET | `/api/centre_formation/:id` | Détail d’un centre de formation

### Catégories (MySQL)

Méthode HTTP | Route | Description
---|---|---
GET | `/api/categorie` | Lister les catégories
GET | `/api/categorie/:id` | Détail d’une catégorie

### Role (MySQL)

Méthode HTTP | Route | Description
---|---|---
GET | `/api/role` | Lister les roles
GET | `/api/role/:id` | Détail d’un role

### Utilisateurs (MySQL)

Méthode HTTP | Route | Description
---|---|---
GET | `/api/user` | Lister les utilisateurs
GET | `/api/user/:id` | Détail d’un utilisateur

### Contact (MongoDB)

Méthode HTTP | Route | Description
---|---|---
GET | `/api/contact` | Lister les messages (collection MongoDB `contact`)
POST | `/api/contact` | Créer un message de contact (stocké en MongoDB)

## Documents

- Cahier des charges / dossier professionnel (PDF) : `docs/.pdf`
message.txt
6 Ko
