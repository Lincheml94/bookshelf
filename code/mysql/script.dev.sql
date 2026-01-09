-- les commandes sql sont en capitales pour les différencier des autres commandes
-- supprimer la base de données si elle existe
-- ATTENTION, ne pas faire en production
DROP DATABASE IF EXISTS publishinghouse_dev;

-- créer la base de données 
CREATE DATABASE publishinghouse_dev;

-- créer les tables

-- ROLE
CREATE TABLE publishinghouse_dev.role(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(15) NOT NULL UNIQUE
);

-- USER

CREATE TABLE publishinghouse_dev.user(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL,
    role_id TINYINT(1) UNSIGNED NOT NULL,
    FOREIGN KEY (role_id) REFERENCES publishinghouse_dev.role(id), 
    INDEX(email)
);

-- NEWSLETTER
CREATE TABLE publishinghouse_dev.newsletter(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE
);

-- VISITOR
CREATE TABLE publishinghouse_dev.visitor(
    id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE, 
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL
);

-- CURRENT STATE

CREATE TABLE publishinghouse_dev.currentstate(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    statename VARCHAR(20) NOT NULL

);

-- AUTHOR

CREATE TABLE publishinghouse_dev.author(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    bio TEXT NOT NULL
);

-- BOOK

CREATE TABLE publishinghouse_dev.book(
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

CREATE TABLE publishinghouse_dev.category(
    id TINYINT(2) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(15) NOT NULL
);


-- Table de jointure : BOOK - CURRENT STATE

CREATE TABLE publishinghouse_dev.book_currentstate(
    book_id SMALLINT UNSIGNED NOT NULL,
    currentstate_id TINYINT(1) UNSIGNED NOT NULL,
    FOREIGN KEY (book_id) REFERENCES publishinghouse_dev.book(id),
    FOREIGN KEY (currentstate_id) REFERENCES publishinghouse_dev.currentstate(id),
    PRIMARY KEY (book_id, currentstate_id)
);


-- Table de jointure : BOOK - AUTHOR

CREATE TABLE publishinghouse_dev.book_author(
    book_id SMALLINT UNSIGNED NOT NULL,
    author_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (book_id) REFERENCES publishinghouse_dev.book(id),
    FOREIGN KEY (author_id) REFERENCES publishinghouse_dev.author(id),
    PRIMARY KEY (book_id, author_id)
);



-- Table de jointure : BOOK - CATEGORY

CREATE TABLE publishinghouse_dev.book_category(
    book_id SMALLINT UNSIGNED NOT NULL,
    category_id TINYINT(2) UNSIGNED NOT NULL,
    FOREIGN KEY (book_id) REFERENCES publishinghouse_dev.book(id),
    FOREIGN KEY (category_id) REFERENCES publishinghouse_dev.category(id),
    PRIMARY KEY (book_id, category_id)
);


-- EVENTS
CREATE TABLE publishinghouse_dev.events(
    id TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    date DATETIME NOT NULL,
    description_ TEXT NOT NULL,
    location VARCHAR(150),
    isComplete BOOLEAN,
    book_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY (book_id) REFERENCES publishinghouse_dev.book(id)
);



-- Table de jointure : EVENTS - VISITOR

CREATE TABLE publishinghouse_dev.events_visitor(
    events_id TINYINT UNSIGNED NOT NULL,
    visitor_id SMALLINT UNSIGNED  NOT NULL,
    FOREIGN KEY (events_id) REFERENCES publishinghouse_dev.events(id),
    FOREIGN KEY (visitor_id) REFERENCES publishinghouse_dev.visitor(id),
    PRIMARY KEY (events_id, visitor_id)
);

-- -----------------------------------------------------------------------------------------------------

-- --------------------------------------INSERER LES DONNEES----------------------------------------------

-- on doit les insérer dans un ordre logique : comme au dessus, d'abord les tables qui n'ont pas de relations. On peut suivre l'ordre ci-dessus et suivre l'ordre des colonnes
-- NULL pour définir les clés primaires : le système va décider

-- ROLE

-- INSERT INTO publishinghouse_dev.role
-- VALUES
--     ( NULL, "admin" ),
--     ( NULL, "user" )
-- ;

-- -- USER
-- -- admin@admin.fr / mdp : admin
-- -- user@user.fr / user

-- INSERT INTO publishinghouse_dev.user
-- VALUES 
--     ( NULL, "admin@admin.fr", "$argon2i$v=19$m=16,t=2,p=1$dGxwUTRIRmgyR1g3eTdEMg$E+Xj10nHDrbt4PR8MjaMkQ", 1 ),
--     ( NULL, "user@user.fr", "$argon2i$v=19$m=16,t=2,p=1$UWdtVFBxaWRST1pzeGFpMw$L9Gxkg/BfFsGKSsxaQQqlQ", 2 )
-- ;

-- -- NEWSLETTER--------------------------

-- INSERT INTO publishinghouse_dev.newsletter
-- VALUES
--     ( NULL, "visitor1@newsletter.fr" )
-- ;

-- -- VISITOR---------------------------------------------

-- INSERT INTO publishinghouse_dev.visitor
-- VALUES
--     ( NULL, "visitor1@visitor.fr", "Solène", "Colin"),
--     ( NULL, "visitor2@visitor.fr", "Caro", "Rheims"),
--     ( NULL, "visitor3@visitor.fr", "Julia", "Piccolo")
-- ;

-- -- -CURRENT STATE------------------------------

-- INSERT INTO publishinghouse_dev.currentstate
-- VALUES
--     ( NULL, "en rupture de stock" ),
--     ( NULL, "en stock" ),
--     ( NULL, "Paru" ),
--     ( NULL, "A paraitre" )
-- ;

-- -- AUTHOR--------------------------------------------

-- INSERT INTO publishinghouse_dev.author
-- VALUES
--     (NULL, 'Héloise', 'Brézillon', 'Héloise Brézillon est autrice~chercheure. Son travail hybride poésie, théorie & SF. En 2018 naît Mange tes mots, une bulle poétique créée avec Margot Ferrera, où reprendre son souffle le temps d''une scène ouverte, d''un atelier d''écriture ou d''un podcast. Ses textes ont été performés avec sa bouche partout en France et publiés en revues. T3M est son premier livre.'),
--     (NULL, 'Elodie', 'Petit', 'Elodie Petit alias Gorge Bataille, née en 1985, est une performeuse et poétesse queer française.'),
--     (NULL, 'Dorothy', 'Allison', 'Dorothy Allison est une romancière, poétesse et essayiste américaine, connue pour ses œuvres explorant la classe, la sexualité et la violence. Son roman Bastard Out of Carolina est un classique de la littérature queer et féministe.'),
--     (NULL, 'Goliarda', 'Sapienza', 'Goliarda Sapienza était une écrivaine italienne, célèbre pour son roman L''Art de la joie, une œuvre audacieuse et féministe qui explore la liberté et la quête de soi.'),
--     (NULL, 'Fatima', 'Daas', 'Fatima Daas est une autrice française, connue pour son roman La Petite Dernière, où elle aborde les thèmes de l''identité, de la religion et de la sexualité à travers une narration poétique et intime.'),
--     (NULL, 'Wendy', 'Delorme', 'Wendy Delorme est une écrivaine et performeuse française, dont les œuvres, comme Quatrième génération, explorent la transidentité, la famille et la mémoire.'),
--     (NULL, 'Mariana', 'Enriquez', 'Mariana Enriquez est une journaliste et écrivaine argentine, autrice de Nos choses, un recueil de nouvelles horrifiques ancrées dans la réalité sociale et politique de l''Argentine.'),
--     (NULL, 'Laura', 'Vazquez', 'Laura Vazquez est une écrivaine et poétesse française, dont les textes, comme La Vie sexuelle des fleurs, mêlent érotisme, nature et quête d''identité.'),
--     (NULL, 'Joan', 'Nestle', 'Joan Nestle est une historienne et écrivaine américaine, cofondatrice des Lesbian Herstory Archives. Ses œuvres, comme A Restricted Country, explorent la mémoire lesbienne et la résistance.'),
--     (NULL, 'Phoebe', 'Hadjimarkos Clark', 'Phoebe Hadjimarkos Clark est une écrivaine et artiste américaine, connue pour ses textes expérimentaux et son engagement dans les communautés queer et trans.'),
--     (NULL, 'Leslie', 'Feinberg', 'Leslie Feinberg était une militante transgenre et écrivaine américaine, autrice de Stone Butch Blues, un roman culte sur la vie des personnes trans et la lutte des classes.'),
--     (NULL, 'Karim', 'Kattan', 'Karim Kattan est un écrivain palestinien, dont les œuvres, comme La Maison des absents, explorent l''exil, la mémoire et l''identité palestinienne.'),
--     (NULL, 'Alison', 'Bechdel', 'Alison Bechdel est une autrice de bandes dessinées américaine, célèbre pour Fun Home, une autobiographie graphique explorant le coming out de l''autrice et sa relation avec son père.'),
--     (NULL, 'Violette', 'Leduc', 'Violette Leduc (1907-1972) est une écrivaine française, figure majeure de la littérature autobiographique. Son œuvre, souvent audacieuse et intime, explore la quête d''amour, la sexualité, la jalousie et la souffrance, avec un style lyrique et sans concession. Elle fut proche de Simone de Beauvoir et de Jean Genet.');

-- -- BOOK ---------------------------------------------------------------

-- INSERT INTO publishinghouse_dev.book
-- VALUES
--     (
--         NULL,
--         "T3M",
--         "2024-10-11",
--         "et ça te comporte. ça te comporte sans que tu ne le saches. tu roules les jours à l'aveugle. tu as un monde en toi, un petit monde dont tu n'as jamais fait la carte et tu roules dedans, hors piste. il faut la faire la carte, oui, c'est important. pour ne pas être triste.",
--         14,
--         "120 pages",
--         "20 x 11 cm",
--         "t3m.jpg",
--         "979-10-95630-78-4",
--         "livre broché"
--     ),
--     (   
--         NULL,
--         "Bastard Out of Carolina", 
--         "1992-06-01", 
--         "Un roman poignant sur une jeune fille grandissant dans une famille pauvre et violente du Sud des États-Unis, explorant les thèmes de la résilience et de l'identité.", 
--         12.99, 
--         "320", 
--         "14x21", 
--         "bastard_out_of_carolina.jpg", 
--         "9780452273281", 
--         "Plume"
--     ),
--     (   
--         NULL,
--         "Cavedweller", 
--         "1998-05-15", 
--         "L'histoire d'une femme qui retourne dans sa ville natale de Géorgie pour retrouver ses filles, après une vie tumultueuse à Los Angeles.", 
--         13.50, 
--         "384", 
--         "14x21", 
--         "cavedweller.jpg", 
--         "9780452280128", 
--         "Plume"
--     ),
--     (   NULL, 
--         "L'Art de la joie", 
--         "2008-09-15", 
--         "Une épopée féministe et sensuelle sur la vie de Modesta, une femme sicilienne en quête de liberté et de bonheur au début du XXe siècle.", 
--         14.50, 
--         "400", 
--         "15x23", 
--         "art_de_la_joie.jpg", 
--         "9782070396071", 
--         "Gallimard"
--     ),
--     (   
--         NULL,
--         "La Petite Dernière", 
--         "2020-08-20", 
--         "Un roman intime et poétique sur une jeune femme française d'origine algérienne, en quête d'identité entre religion, famille et sexualité.", 
--         11.90, 
--         "160", 
--         "13x20", 
--         "petite_derniere.jpg", 
--         "9782072894567", 
--         "Noir sur Blanc"
--     ),
--     (   
--         NULL,
--         "Jouer le jeu", 
--         "2024-01-11", 
--         "Un roman sur l''amitié, l''amour et les jeux de pouvoir, explorant les relations humaines dans un Paris contemporain.", 
--         11.90, 
--         "192", 
--         "13x20", 
--         "jouer_le_jeu.jpg", 
--         "9782073021456", 
--         "Noir sur Blanc"
--     ),
--     (
--         NULL,
--         "Quatrième génération", 
--         "2017-03-10", 
--         "Un récit autobiographique et politique sur la transidentité, la filiation et la mémoire familiale.", 
--         10.50, 
--         "192", 
--         "12x19", 
--         "quatrieme_generation.jpg", 
--         "9782367440556", 
--         "Cambourakis"
--     ),
--     (   
--         NULL,
--         "Viendra le temps du feu", 
--         "2021-08-26", 
--         "Un récit poétique et politique sur la transmission, la mémoire et la résistance, entre autobiographie et fiction.", 
--         12.90, 
--         "176", 
--         "12x19", 
--         "viendra_le_temps_du_feu.jpg", 
--         "9782367441560", 
--         "Cambourakis"
--     ),
--     (
--         NULL,
--         "Nos choses", 
--         "2019-11-07", 
--         "Un recueil de nouvelles horrifiques et sociales, ancrées dans la réalité argentine, où le surnaturel côtoie le quotidien.", 
--         13.99, 
--         "224", 
--         "14x22", 
--         "nos_choses.jpg", 
--         "9782378870256", 
--         "Grasset"
--     ),
--     (
--         NULL,
--         "La Vie sexuelle des fleurs", 
--         "2021-05-13", 
--         "Un recueil de poèmes et de textes hybrides, explorant l'érotisme, la nature et la quête d''identité.", 
--         9.90, 
--         "128", 
--         "11x18", 
--         "vie_sexuelle_fleurs.jpg", 
--         "9782378870560", 
--         "Grasset"
--     ),
--     (   
--         NULL,
--         "A Restricted Country", 
--         "1987-05-01", 
--         "Un recueil d'essais et de récits sur la mémoire lesbienne, la résistance et la construction d'une histoire collective.", 
--         15.99, 
--         "256", 
--         "15x23", 
--         "restricted_country.jpg", 
--         "9780918393300", 
--         "Firebrand Books"
--     ),
--     (   
--         NULL,
--         "Stone Butch Blues", 
--         "1993-06-01", 
--         "Un roman culte sur la vie d'une personne butch dans les années 1950-1970, mêlant lutte des classes et quête d''identité de genre.", 
--         14.99, 
--         "352", 
--         "14x21", 
--         "stone_butch_blues.jpg", 
--         "9781573441189", 
--         "Firebrand Books"
--     ),
--     (
--         NULL,
--         "La Maison des absents", 
--         "2021-09-02", 
--         "Un roman sur l''exil, la mémoire et l'identité palestinienne, à travers les histoires d''une famille dispersée.", 
--         12.50, 
--         "208", 
--         "13x20", 
--         "maison_absents.jpg", 
--         "9782367190556", 
--         "Actes Sud"
--     ),
--     (   
--         NULL,
--         "L'Éden à l'aube", "2024-08-22", 
--         "Un roman qui explore les thèmes de l'exil, de la mémoire et de la quête d'identité palestinienne, à travers une narration poétique et intime.", 
--         14.90, 
--         "224", 
--         "13x20", 
--         "eden_a_l_aube.jpg", 
--         "9782367191232", 
--         "Actes Sud"
--     ),
--     (   
--         NULL,
--         "Fun Home", 
--         "2006-06-08", 
--         "Une autobiographie graphique explorant le coming out de l'autrice et sa relation complexe avec son père, entre secrets et littérature.", 
--         18.99, 
--         "240", 
--         "17x23", 
--         "fun_home.jpg", 
--         "9780618871711", 
--         "Houghton Mifflin"
--     ),
--     (   
--         NULL,
--         "Ravages", 
--         "1955-01-01", 
--         "Roman autobiographique où Violette Leduc raconte sa passion destructrice pour une femme mariée, 'Hermine', explorant la jalousie, la souffrance et la quête d'absolu. Une œuvre majeure de la littérature lesbienne et intime.", 
--         12.50, 
--         "256", 
--         "14x22", 
--         "ravages_violette_leduc.jpg", 
--         "9782070293456", 
--         "Gallimard"
--     );


-- -- CATEGORY ------------------------------------------------------------------------------------------------

-- INSERT INTO publishinghouse_dev.category
-- VALUES
--     ( NULL, "Fiction" ), 
--     ( NULL, "Poésie" ), 
--     ( NULL, "Autofiction" ), 
--     ( NULL, "Bande dessinée" ), 
--     ( NULL, "Essai" )
-- ;

-- -- EVENTS

-- INSERT INTO publishinghouse_dev.events
-- VALUES
--     ( NULL, 
--     "Séance de dédicace : Héloise Brézillon", 
--     "2025-12-02", 
--     "Venez vous faire dédicasser votre livre par l'autrice la plus innovante de sa génération !", 
--     "Librairie Les mots à la bouche", false, 1 
--     )
-- ;

-- INSERT INTO publishinghouse_dev.book_author (book_id, author_id) VALUES
-- (1, 1),
-- (2, 3),
-- (3, 3),
-- (4, 4),
-- (5, 5),
-- (6, 1),
-- (7, 6),
-- (8, 7),
-- (9, 7),
-- (10, 8),
-- (11, 9),
-- (12, 10),
-- (13, 11),
-- (14, 12),
-- (15, 13),
-- (16, 14);

-- INSERT INTO publishinghouse_dev.book_currentstate (book_id, currentstate_id) VALUES
-- (1, 2),
-- (2, 3),
-- (3, 3),
-- (4, 4),
-- (5, 2),
-- (6, 2),
-- (7, 2),
-- (8, 2),
-- (9, 3),
-- (10, 2),
-- (11, 3),
-- (12, 3),
-- (13, 2),
-- (14, 2),
-- (15, 3),
-- (16, 2);

-- INSERT INTO publishinghouse_dev.book_category (book_id, category_id) VALUES
-- (1, 1),
-- (2, 1),
-- (3, 1),
-- (4, 1),
-- (5, 1),
-- (6, 1),
-- (7, 1),
-- (8, 2),
-- (9, 1),
-- (10, 2),
-- (11, 1),
-- (12, 1),
-- (13, 1),
-- (14, 1),
-- (15, 4),
-- (16, 1);

-- Jointure : Livre - État
-- INSERT INTO publishinghouse_dev.book_currentstate (book_id, currentstate_id) VALUES
-- (1, 1), -- Les Misérables : Disponible
-- (2, 1), -- L'Étranger : Disponible
-- (3, 3), -- Mémoires d'Hadrien : Précommande
-- (4, 1), -- 1984 : Disponible
-- (5, 1); -- Harry Potter : Disponible

-- -- Jointure : Livre - Auteur
-- INSERT INTO publishinghouse_dev.book_author (book_id, author_id) VALUES
-- (1, 1), -- Les Misérables : Victor Hugo
-- (2, 2), -- L'Étranger : Albert Camus
-- (3, 3), -- Mémoires d'Hadrien : Marguerite Yourcenar
-- (4, 4), -- 1984 : George Orwell
-- (5, 5); -- Harry Potter : J.K. Rowling

-- -- Jointure : Livre - Catégorie
-- INSERT INTO publishinghouse_dev.book_category (book_id, category_id) VALUES
-- (1, 1), -- Les Misérables : Roman
-- (2, 1), -- L'Étranger : Roman
-- (3, 1), -- Mémoires d'Hadrien : Roman
-- (4, 4), -- 1984 : Science-Fiction
-- (5, 5); -- Harry Potter : Jeunesse

-- -- Jointure : Événement - Visiteur
-- INSERT INTO publishinghouse_dev.events_visitor (events_id, visitor_id) VALUES
-- (1, 1), -- Rencontre Victor Hugo : Jean Dupont
-- (1, 2), -- Rencontre Victor Hugo : Marie Martin
-- (2, 3), -- Conférence Camus : Pierre Durand
-- (3, 4), -- Lancement Mémoires d'Hadrien : Sophie Lambert
-- (4, 5), -- Débat dystopie : Luc Bernard
-- (5, 1), -- Nuit Harry Potter : Jean Dupont
-- (5, 2); -- Nuit Harry Potter : Marie Martin


-- ----------------------------------------------------------------------------------------
-- ---------------------------------TABLES DE JOINTURE ----------------------------------

-- pour les tables de jointures, on doit créer deux tables, on crée une transaction
-- choisir la table principale pour la transaction
-- créer une variable sql : une fonction sql qui va permettre de récupÃ©rer le dernier identifiant inséré



-- BOOK_AUTHOR----------------------------------------------------------------------------

-- requête 1

-- START TRANSACTION;

-- INSERT INTO publishinghouse_dev.book
-- VALUE 
--     (NULL, "FATAL.E",
--         "2025-10-11",
--         "et ça te comporte. Ã§a te comporte sans que tu ne le saches. tu roules les jours Ã  l'aveugle. tu as un monde en toi, un petit monde dont tu nâ€™as jamais fait la carte et tu roules dedans, hors piste. il faut la faire la carte, oui, câ€™est important. pour ne pas être triste.",
--         14, 
--         "220 pages",
--         "20 x 11 cm",
--         "fatal_e.jpg",
--         "977-10-95630-78-4",
--         "livre brochÃ©")
--         ;

-- -- variable qui stocke le dernier id insÃ©rÃ©:

-- SET @book_id = LAST_INSERT_ID();

-- -- requÃªte 2

-- INSERT INTO publishinghouse_dev.book_author
-- VALUES 
--     (2, @book_id)
-- ;

-- COMMIT;

-- -- T3M - HELOISE BREZILLON

-- START TRANSACTION;

-- -- INSERT INTO publishinghouse_dev.book
-- -- VALUE
-- --     (NULL, 1)
-- -- ;

-- INSERT INTO publishinghouse_dev.book_author
-- VALUE
--     ( 1, 2 )
-- ;

-- COMMIT;

-- -- --Mon corps de ferme
-- START TRANSACTION;

-- INSERT INTO publishinghouse_dev.book
-- VALUES
--     ( NULL,
--         "Mon corps de ferme",
--         "2021-07-11",
--         "Mon corps de ferme est un sublime livre de poÃ©sie traitant de la vie rurale",
--         30,
--         "120 pages",
--         "20 x 11 cm",
--         "mcdf.jpg",
--         "279-10-95630-90-4",
--         "livre brochÃ©"
--     )
-- ;

-- INSERT INTO publishinghouse_dev.author
-- VALUE
--     (NULL, "AurÃ©lie", "Olivier", "AurÃ©lie Olivier est une jeune autrice dont le premier roman Mon Corps de Ferme l'a fait connaitre")
-- ;

-- SET @book_id = LAST_INSERT_ID();
-- SET @author_id = LAST_INSERT_ID();

-- INSERT INTO publishinghouse_dev.book_author
-- VALUES
--     (@book_id, @author_id)
-- ;

-- INSERT INTO publishinghouse_dev.book_category
-- VALUES 
--     (@book_id, 1),
--     (@book_id, 3)

-- ;

-- INSERT INTO publishinghouse_dev.book_currentstate
-- VALUES
--     (@book_id, 3)
-- ;


-- COMMIT;

-- -- BOOK_CATEGORY-------------------------------------------------------------------
-- -- T3M

-- -- START TRANSACTION;

-- -- INSERT INTO publishinghouse_dev.book
-- -- VALUE
-- --     (NULL, 1)
-- --     ;

-- -- -- requÃªte 2

-- -- INSERT INTO publishinghouse_dev.book_category
-- -- VALUES 
-- --     (1, book_id)
-- -- ;

-- -- COMMIT;

-- -- Fatal.e-----------------------------------------------------------------------------

-- -- START TRANSACTION;

-- -- INSERT INTO publishinghouse_dev.book
-- -- VALUE  
-- --     ( NULL, 2)
-- -- ;

-- -- INSERT INTO publishinghouse_dev.book_category
-- -- VALUE
-- --     (2, book_id)
-- -- ;

-- -- COMMIT;



-- -- BOOK_CURRENTSTATE----------------------------------------------------------------------
-- -- T3M------------------------------------------

-- -- START TRANSACTION;



-- -- INSERT INTO publishinghouse_dev.book_currentstate
-- -- VALUES
-- --     (1, 3)
-- -- ;

-- -- COMMIT;

-- -- -- Fatal.e

-- -- START TRANSACTION;

-- -- INSERT INTO publishinghouse_dev.book

-- -- VALUES
-- --     ( NULL, 2)
-- -- ;

-- -- INSERT INTO publishinghouse_dev.book_currentstate

-- -- VALUES
-- --     ( 3, book_id)
-- -- ;

-- -- COMMIT;


-- -- START TRANSACTION;-----------------------------supprimÃ© par une commande DELETE--------------------

-- -- INSERT INTO publishinghouse_dev.book
-- -- VALUE
-- --     (NULL, "La bÃªte humaine",
-- --         "1875-10-11",
-- --         "et Ã§a te comporte. Ã§a te comporte sans que tu ne le saches. tu roules les jours Ã  lâ€™aveugle. tu as un monde en toi, un petit monde dont tu nâ€™as jamais fait la carte et tu roules dedans, hors piste. il faut la faire la carte, oui, câ€™est important. pour ne pas Ãªtre triste.",
-- --         14, 
-- --         "560 pages",
-- --         "20 x 11 cm",
-- --         "la_bete_humaine.jpg",
-- --         "977-10-96370-78-4",
-- --         "livre brochÃ©")
-- --     ;

-- -- -- variable

-- -- SET @book_id = LAST_INSERT_ID();

-- -- -- requÃªte 2

-- -- INSERT INTO publishinghouse_dev.book_currentstate
-- -- VALUES 
-- --     (3, book_id)
-- -- ;

-- -- COMMIT;



-- -- EVENT_VISITOR---------------------------------------------------------------------------

-- START TRANSACTION;

-- INSERT INTO publishinghouse_dev.events
-- VALUE
--     ( NULL, 
--     "SÃ©ance de dÃ©dicace : Elodie Petit, alias Gorge Bataille", 
--     "2025-12-28", 
--     "Venez vous faire dÃ©dicasser votre livre par l'autrice la plus innovante de sa gÃ©nÃ©ration !", 
--     "Librairie Les mots Ã  la bouche", 
--     false, 
--     2 )
-- ;

-- SET @events_id = LAST_INSERT_ID();

-- INSERT INTO publishinghouse_dev.events_visitor
-- VALUES 
--     (@events_id, 1)
-- ;

-- COMMIT;



-- -- -----------------------------------------------------------------------------------------------
-- -- --------------------------------------- CRUD -------------------------------------------------------------

-- -- mettre Ã  jour un enregistrement : UPDATE

-- -- UPDATE publishinghouse_dev.book
-- -- SET 
-- --     book.title = 'T4M', 
-- --     book.price = 15
   
-- -- WHERE
-- --     book.id = 1
-- -- ;


-- -- Supprimer un enregistrement -----------------------------------------------------


-- -- START TRANSACTION;

-- -- requÃªte 1

-- -- DELETE FROM publishinghouse_dev.book_currentstate
-- -- WHERE 
-- --     book_currentstate.book_id = 3
-- -- ;

-- -- DELETE FROM publishinghouse_dev.book
-- -- WHERE 
-- --     book.id = 3
-- -- ;

-- -- COMMIT;

-- -- sÃ©lectionner toutes les colonnes d'une table
-- -- SELECT book.*
-- -- FROM publishinghouse_dev.book;
-- -- -- Ã  copier dans la console

-- -- SELECT book.title, book.price
-- -- FROM publishinghouse_dev.book
-- -- WHERE book.price > 5
-- -- AND book.category LIKE "f%"
-- -- ;
-- -- SELECT book.title, book.price
-- -- FROM publishinghouse_dev.book
-- -- WHERE book.price > 5
-- -- AND book.category LIKE "f%"
-- -- ;


-- jointure

-- SELECT user.*, role.name
-- FROM publishinghouse_dev.user
-- JOIN publishinghouse_dev.role
-- ON role.id = user.role_id
-- \G









