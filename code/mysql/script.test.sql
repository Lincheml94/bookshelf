-- -- les commandes sql sont en capitales pour les différencier des autres commandes
-- -- supprimer la base de données si elle existe
-- -- ATTENTION, ne pas faire en production
-- DROP DATABASE IF EXISTS publishinghouse_test;

-- -- créer la base de données 
-- CREATE DATABASE publishinghouse_test;

-- -- créer les tables

-- -- ROLE
-- CREATE TABLE publishinghouse_test.role(
--     id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(15) NOT NULL UNIQUE
-- );

-- -- USER

-- CREATE TABLE publishinghouse_test.user(
--     id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     email VARCHAR(50) NOT NULL UNIQUE,
--     password VARCHAR(150) NOT NULL,
--     role_id TINYINT(1) UNSIGNED NOT NULL,
--     FOREIGN KEY (role_id) REFERENCES publishinghouse_test.role(id), 
--     INDEX(email)
-- );

-- -- NEWSLETTER
-- CREATE TABLE publishinghouse_test.newsletter(
--     id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     email VARCHAR(50) NOT NULL UNIQUE
-- );

-- -- VISITOR
-- CREATE TABLE publishinghouse_test.visitor(
--     id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     email VARCHAR(50) NOT NULL UNIQUE, 
--     firstname VARCHAR(100) NOT NULL,
--     lastname VARCHAR(100) NOT NULL
-- );

-- -- CURRENT STATE

-- CREATE TABLE publishinghouse_test.currentstate(
--     id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     statename VARCHAR(20) NOT NULL
-- );

-- -- AUTHOR

-- CREATE TABLE publishinghouse_test.author(
--     id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     firstname VARCHAR(100) NOT NULL,
--     lastname VARCHAR(100) NOT NULL,
--     bio TEXT NOT NULL
-- );

-- -- BOOK

-- CREATE TABLE publishinghouse_test.book(
--     id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(500) NOT NULL,
--     published_at DATE NOT NULL,
--     description TEXT NOT NULL,
--     price DECIMAL(4,2) NOT NULL,
--     pages VARCHAR(10) NOT NULL,
--     dimensions VARCHAR(10) NOT NULL,
--     images VARCHAR (150) NOT NULL,
--     isbn VARCHAR(30) NOT NULL,
--     print VARCHAR(50) NOT NULL
-- );

-- -- CATEGORY

-- CREATE TABLE publishinghouse_test.category(
--     id TINYINT(2) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(15) NOT NULL
-- );


-- Table de jointure : BOOK - CURRENT STATE

-- CREATE TABLE publishinghouse_test.book_currentstate(
--     book_id SMALLINT UNSIGNED NOT NULL,
--     currentstate_id TINYINT(1) UNSIGNED NOT NULL,
--     FOREIGN KEY (book_id) REFERENCES publishinghouse_test.book(id),
--     FOREIGN KEY (currentstate_id) REFERENCES publishinghouse_test.currentstate(id),
--     PRIMARY KEY (book_id, currentstate_id)
-- );


-- -- Table de jointure : BOOK - AUTHOR

-- CREATE TABLE publishinghouse_test.book_author(
--     book_id SMALLINT UNSIGNED NOT NULL,
--     author_id TINYINT UNSIGNED NOT NULL,
--     FOREIGN KEY (book_id) REFERENCES publishinghouse_test.book(id),
--     FOREIGN KEY (author_id) REFERENCES publishinghouse_test.author(id),
--     PRIMARY KEY (book_id, author_id)
-- );



-- -- Table de jointure : BOOK - CATEGORY

-- CREATE TABLE publishinghouse_test.book_category(
--     book_id SMALLINT UNSIGNED NOT NULL,
--     category_id TINYINT(2) UNSIGNED NOT NULL,
--     FOREIGN KEY (book_id) REFERENCES publishinghouse_test.book(id),
--     FOREIGN KEY (category_id) REFERENCES publishinghouse_test.category(id),
--     PRIMARY KEY (book_id, category_id)
-- );


-- -- EVENTS
-- CREATE TABLE publishinghouse_test.events(
--     id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(100) NOT NULL,
--     date DATETIME NOT NULL,
--     description_ TEXT NOT NULL,
--     location VARCHAR(150),
--     isComplete BOOLEAN,
--     book_id SMALLINT UNSIGNED NOT NULL,
--     FOREIGN KEY (book_id) REFERENCES publishinghouse_test.book(id)
-- );



-- -- Table de jointure : EVENTS - VISITOR

-- CREATE TABLE publishinghouse_test.events_visitor(
--     events_id TINYINT UNSIGNED NOT NULL,
--     visitor_id SMALLINT UNSIGNED  NOT NULL,
--     FOREIGN KEY (events_id) REFERENCES publishinghouse_test.events(id),
--     FOREIGN KEY (visitor_id) REFERENCES publishinghouse_test.visitor(id),
--     PRIMARY KEY (events_id, visitor_id)
-- );

-- -----------------------------------------------------------------------------------------------------

-- --------------------------------------INSERER LES DONNEES----------------------------------------------




-- les commandes sql sont en capitales pour les différencier des autres commandes
-- supprimer la base de données si elle existe
-- ATTENTION, ne pas faire en production
DROP DATABASE IF EXISTS publishinghouse_test;

-- créer la base de données 
CREATE DATABASE publishinghouse_test;

-- créer les tables

-- ROLE
CREATE TABLE publishinghouse_test.role(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(15) NOT NULL UNIQUE
);

-- USER

CREATE TABLE publishinghouse_test.user(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL,
    role_id TINYINT(1) UNSIGNED NOT NULL,
    FOREIGN KEY (role_id) REFERENCES publishinghouse_test.role(id), 
    INDEX(email)
);

-- NEWSLETTER
CREATE TABLE publishinghouse_test.newsletter(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE
);

-- VISITOR
CREATE TABLE publishinghouse_test.visitor(
    id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE, 
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL
);

-- CURRENT STATE

CREATE TABLE publishinghouse_test.currentstate(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    statename VARCHAR(20) NOT NULL

);

-- AUTHOR

CREATE TABLE publishinghouse_test.author(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    bio TEXT NOT NULL
);

-- BOOK

CREATE TABLE publishinghouse_test.book(
    id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    published_at DATE NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(4,2) NOT NULL,
    pages VARCHAR(10) NOT NULL,
    dimensions VARCHAR(10) NOT NULL,
    images VARCHAR (150) NOT NULL,
    isbn VARCHAR(30) NOT NULL,
    print VARCHAR(50) NOT NULL
);

-- CATEGORY

CREATE TABLE publishinghouse_test.category(
    id TINYINT(2) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(15) NOT NULL
);


-- Table de jointure : BOOK - CURRENT STATE

CREATE TABLE publishinghouse_test.book_currentstate(
    book_id SMALLINT UNSIGNED NOT NULL,
    currentstate_id TINYINT(1) UNSIGNED NOT NULL,
    FOREIGN KEY (book_id) REFERENCES publishinghouse_test.book(id),
    FOREIGN KEY (currentstate_id) REFERENCES publishinghouse_test.currentstate(id),
    PRIMARY KEY (book_id, currentstate_id)
);


-- Table de jointure : BOOK - AUTHOR

CREATE TABLE publishinghouse_test.book_author(
    book_id SMALLINT UNSIGNED NOT NULL,
    author_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (book_id) REFERENCES publishinghouse_test.book(id),
    FOREIGN KEY (author_id) REFERENCES publishinghouse_test.author(id),
    PRIMARY KEY (book_id, author_id)
);



-- Table de jointure : BOOK - CATEGORY

CREATE TABLE publishinghouse_test.book_category(
    book_id SMALLINT UNSIGNED NOT NULL,
    category_id TINYINT(2) UNSIGNED NOT NULL,
    FOREIGN KEY (book_id) REFERENCES publishinghouse_test.book(id),
    FOREIGN KEY (category_id) REFERENCES publishinghouse_test.category(id),
    PRIMARY KEY (book_id, category_id)
);


-- EVENTS
CREATE TABLE publishinghouse_test.events(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    date DATETIME NOT NULL,
    description_ TEXT NOT NULL,
    location VARCHAR(150),
    isComplete BOOLEAN,
    book_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY (book_id) REFERENCES publishinghouse_test.book(id)
);



-- Table de jointure : EVENTS - VISITOR

CREATE TABLE publishinghouse_test.events_visitor(
    events_id TINYINT UNSIGNED NOT NULL,
    visitor_id SMALLINT UNSIGNED  NOT NULL,
    FOREIGN KEY (events_id) REFERENCES publishinghouse_test.events(id),
    FOREIGN KEY (visitor_id) REFERENCES publishinghouse_test.visitor(id),
    PRIMARY KEY (events_id, visitor_id)
);

-- Rôles
INSERT INTO publishinghouse_test.role (name) VALUES
('Admin'),
('Éditeur');

-- Utilisateurs
INSERT INTO publishinghouse_test.user (email, password, role_id) VALUES
('admin@editions.fr', '$argon2i$v=19$m=16,t=2,p=1$OEJPT3p0WnYyaWh2SHloUA$VooCQepwOAaEmfksALt0UQ', 1),
('editeur1@editions.fr', '$argon2i$v=19$m=16,t=2,p=1$U1ZnSXlmQkpDb0NpNndyTg$tsaNXBUn4tdz26KKQgn2XQ', 2);

-- -- Newsletter
-- INSERT INTO publishinghouse_test.newsletter (email) VALUES
-- ('news1@editions.fr'),
-- ('news2@editions.fr'),
-- ('news3@editions.fr'),
-- ('news4@editions.fr'),
-- ('news5@editions.fr');

-- -- Visiteurs
INSERT INTO publishinghouse_test.visitor (email, firstname, lastname) VALUES
('visiteur1@editions.fr', 'Jean', 'Dupont'),
('visiteur2@editions.fr', 'Marie', 'Martin'),
('visiteur3@editions.fr', 'Pierre', 'Durand'),
('visiteur4@editions.fr', 'Sophie', 'Lambert'),
('visiteur5@editions.fr', 'Luc', 'Bernard');

-- États des livres
INSERT INTO publishinghouse_test.currentstate (statename) VALUES
('Disponible'),
('Épuisé'),
('Précommande'),
('Archivé');


INSERT INTO publishinghouse_test.author (firstname, lastname, bio) VALUES
('Phoebe', 'Hadjimarkos Clark', 'Écrivaine et traductrice franco-américaine, auteure de "Aliène".'),
('Virginia', 'Woolf', 'Femme de lettres britannique, figure majeure du modernisme littéraire au XXe siècle.'),
('Alain', 'Guiraudie', 'Réalisateur et écrivain français, connu pour son style singulier et ses récits audacieux.'),
('Marguerite', 'Yourcenar', "Première femme élue à l\'Académie française, auteure de Mémoires d\'Hadrien."),
('George', 'Orwell', "Écrivain britannique, célèbre pour 1984 et La Ferme des animaux."),
('Albert', 'Camus', "Écrivain, philosophe et prix Nobel de littérature, connu pour L\'Étranger et La Peste."),
('Dorothy', 'Allison', 'Écrivaine américaine, figure de la littérature prolétarienne et féministe.'),
('Octavia', 'Butler', "Romancière américaine, pionnière de la science-fiction et de l\'afrofuturisme.");


INSERT INTO publishinghouse_test.book (title, published_at, description, price, pages, dimensions, images, isbn, print) VALUES
("Aliène", "2021-01-14", "Un premier roman puissant explorant les marges et les identités à travers une écriture poétique.", 19.00, "192", "14x20", "aliene.jpg", "9782370211422", "Broché"),
("Vers le phare", "1927-05-05", "Une œuvre majeure du modernisme explorant la subjectivité et le passage du temps au sein de la famille Ramsay.", 8.50, "320", "11x18", "phare.jpg", "9782253003458", "Poche"),
("Rabalaïre", "2021-11-04", "Une épopée picaresque et charnelle dans le Sud de la France, portée par une langue inventive.", 22.00, "448", "15x22", "rabalaire.jpg", "9782370552860", "Broché"),
("Mémoires d'Hadrien", "1951-12-05", "Un roman historique épistolaire où l'empereur Hadrien médite sur sa vie, son pouvoir et son amour pour Antinoüs.", 10.50, "368", "12x19", "hadrien.jpg", "9782070369218", "Poche"),
("1984", "1949-06-08", "Le chef-d'œuvre de la dystopie décrivant un régime totalitaire fondé sur la surveillance de masse et la manipulation du langage.", 9.20, "376", "11x18", "1984.jpg", "9782070409207", "Poche"),
("L'Étranger", "1942-05-19", "Un récit fondamental sur l'absurdité de l'existence, mettant en scène Meursault face à un monde dénué de sens.", 7.90, "160", "11x18", "etranger.jpg", "9782070360024", "Poche"),
("L'Histoire de Dorothy", "1992-03-12", "Un récit poignant et brut sur la pauvreté, la survie et la résilience dans l'Amérique rurale du Sud.", 23.00, "416", "14x22", "bastard.jpg", "9782264024343", "Broché"),
("Liens de sang", "1979-06-01", "Une œuvre phare de la science-fiction où une jeune femme noire est transportée dans le passé esclavagiste de sa famille.", 21.00, "352", "13x20", "kindred.jpg", "9782354611484", "Broché");

-- -- Catégories
INSERT INTO publishinghouse_test.category (name) VALUES
('Roman'),
('Poésie'),
('Essai'),
('Science-Fiction'),
('Jeunesse'),
('Histoire'),
('Biographie');

-- -- Jointure : Livre - État
-- INSERT INTO publishinghouse_test.book_currentstate (book_id, currentstate_id) VALUES
-- (1, 1), -- Les Misérables : Disponible
-- (2, 1), -- L'Étranger : Disponible
-- (3, 3), -- Mémoires d'Hadrien : Précommande
-- (4, 1), -- 1984 : Disponible
-- (5, 1); -- Harry Potter : Disponible

Table de jointure : État actuel des stocks (book_currentstate)
INSERT INTO publishinghouse_test.book_currentstate (book_id, currentstate_id) VALUES
(1, 1), -- "Aliène" : Disponible
(2, 1), -- "Vers le phare" : Disponible
(3, 1), -- "Rabalaïre" : Disponible
(4, 3), -- "Mémoires d'Hadrien" : Précommande
(5, 1), -- "1984" : Disponible
(6, 1), -- "L'Étranger" : Disponible
(7, 1), -- "L'Histoire de Dorothy" : Disponible
(8, 1); -- "Liens de sang" : Disponible

-- -- Jointure : Livre - Auteur
-- INSERT INTO publishinghouse_test.book_author (book_id, author_id) VALUES
-- (1, 1), -- Les Misérables : Victor Hugo
-- (2, 2), -- L'Étranger : Albert Camus
-- (3, 3), -- Mémoires d'Hadrien : Marguerite Yourcenar
-- (4, 4), -- 1984 : George Orwell
-- (5, 5); -- Harry Potter : J.K. Rowling

-- -- Jointure : Livre - Catégorie
-- INSERT INTO publishinghouse_test.book_category (book_id, category_id) VALUES
-- (1, 1), -- Les Misérables : Roman
-- (2, 1), -- L'Étranger : Roman
-- (3, 1), -- Mémoires d'Hadrien : Roman
-- (4, 4), -- 1984 : Science-Fiction
-- (5, 5); -- Harry Potter : Jeunesse

-- Événements
INSERT INTO publishinghouse_test.events (title, date, description_, location, isComplete, book_id) VALUES
('Rencontre avec Victor Hugo', '2025-12-15 18:00:00', 'Soirée de dédicace et lecture autour des Misérables.', 'Librairie Parisienne, Paris', FALSE, 1),
("Conférence sur l\'absurde", '2026-01-20 19:00:00', "Analyse de L\'Étranger par des spécialistes de Camus.", 'Université de Lyon', TRUE, 2),
("Lancement Mémoires d\'Hadrien", '2026-02-10 20:00:00', 'Soirée de lancement du nouveau tirage.', 'Bibliothèque Nationale, Paris', FALSE, 3),
('Débat sur la dystopie', '2026-03-05 18:30:00', "Table ronde autour de 1984 et de sa pertinence aujourd\'hui.", 'Médiathèque de Bordeaux', FALSE, 4),
('Nuit Harry Potter', '2026-03-12 20:00:00', 'Soirée spéciale pour les 25 ans de la saga, avec quiz et projections.', 'Librairie Fantastique, Lille', FALSE, 5);

-- -- Jointure : Événement - Visiteur
INSERT INTO publishinghouse_test.events_visitor (events_id, visitor_id) VALUES
(1, 1), -- Rencontre Victor Hugo : Jean Dupont
(1, 2), -- Rencontre Victor Hugo : Marie Martin
(2, 3), -- Conférence Camus : Pierre Durand
(3, 4), -- Lancement Mémoires d'Hadrien : Sophie Lambert
(4, 5), -- Débat dystopie : Luc Bernard
(5, 1), -- Nuit Harry Potter : Jean Dupont
(5, 2); -- Nuit Harry Potter : Marie Martin





