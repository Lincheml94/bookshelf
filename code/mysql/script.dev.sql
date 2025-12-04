-- les commandes sql sont en capitales pour les diffÃ©rencier des autres commandes
-- supprimer la base de donnÃ©es si elle existe
-- ATTETION, ne pas faire en production
DROP DATABASE IF EXISTS publishinghouse_dev;

-- crÃ©er la base de donnÃ©es 
CREATE DATABASE publishinghouse_dev;

-- crÃ©er les tables

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
    FOREIGN KEY user(role_id) REFERENCES publishinghouse_dev.role(id), 
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
    name_ VARCHAR(15) NOT NULL
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
    FOREIGN KEY book(book_id) REFERENCES publishinghouse_dev.book(id)
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

-- on doit les insÃ©rer dans un ordre logique : comme au dessus, d'abord les tables qui n'ont pas de relations. On peut suivre l'ordre ci-dessus et suivre l'ordre des colonnes
-- NULL pour dÃ©finir les clÃ©s primaires : le systÃ¨me va dÃ©cider

-- ROLE

INSERT INTO publishinghouse_dev.role
VALUES
    ( NULL, "admin" ),
    ( NULL, "user" )
;

-- USER
-- admin@admin.fr / mdp : admin
-- user@user.fr / user

INSERT INTO publishinghouse_dev.user
VALUES 
    ( NULL, "admin@admin.fr", "$argon2i$v=19$m=16,t=2,p=1$dGxwUTRIRmgyR1g3eTdEMg$E+Xj10nHDrbt4PR8MjaMkQ", 1 ),
    ( NULL, "user@user.fr", "$argon2i$v=19$m=16,t=2,p=1$UWdtVFBxaWRST1pzeGFpMw$L9Gxkg/BfFsGKSsxaQQqlQ", 2 )
;

-- NEWSLETTER--------------------------

INSERT INTO publishinghouse_dev.newsletter
VALUES
    ( NULL, "visitor1@newsletter.fr" )
;

-- VISITOR---------------------------------------------

INSERT INTO publishinghouse_dev.visitor
VALUES
    ( NULL, "visitor1@visitor.fr", "SolÃ¨ne", "Colin"),
    ( NULL, "visitor2@visitor.fr", "Caro", "Rheims"),
    ( NULL, "visitor3@visitor.fr", "Julia", "Piccolo")
;

-- -CURRENT STATE------------------------------

INSERT INTO publishinghouse_dev.currentstate
VALUES
    ( NULL, "en rupture de stock" ),
    ( NULL, "en stock" ),
    ( NULL, "Paru" ),
    ( NULL, "Ã  paraÃ®tre" )
;

-- AUTHOR--------------------------------------------

-- INSERT INTO publishinghouse_dev.author
-- VALUES
--     ( NULL, "HÃ©loise", "BrÃ©zillon", "HÃ©loÃ¯se BrÃ©zillon est autrice~chercheure. Son travail hybride poÃ©sie, thÃ©orie & SF. En 2018 naÃ®t Mange tes mots, une bulle poÃ©tique crÃ©Ã©e avec Margot Ferrera, oÃ¹ reprendre son souffle le temps dâ€™une scÃ¨ne ouverte, dâ€™un atelier dâ€™Ã©criture ou dâ€™un podcast. Ses textes ont Ã©tÃ© performÃ©s avec sa bouche partout en France et publiÃ©s en revues. T3M est son premier livre." ),
--     ( NULL, "Elodie", "Petit", "Ã‰lodie Petit alias Gorge Bataille, nÃ©e en 1985, est une performeuse et poÃ©tesse queer franÃ§aise." ),
    
-- ;

-- BOOK ---------------------------------------------------------------

-- INSERT INTO publishinghouse_dev.book
-- VALUES
--     (
--         NULL,
--         "T3M",
--         "2024-10-11",
--         "et Ã§a te comporte. Ã§a te comporte sans que tu ne le saches. tu roules les jours Ã  lâ€™aveugle. tu as un monde en toi, un petit monde dont tu nâ€™as jamais fait la carte et tu roules dedans, hors piste. il faut la faire la carte, oui, câ€™est important. pour ne pas Ãªtre triste.",
--         14,
--         "120 pages",
--         "20 x 11 cm",
--         "t3m.jpg",
--         "979-10-95630-78-4",
--         "livre brochÃ©"
--     ),
--     (
--         NULL,
--         "vingt mille lieux sous la mer",
--         "1875-10-11",
--         "et Ã§a te comporte. Ã§a te comporte sans que tu ne le saches. tu roules les jours Ã  lâ€™aveugle. tu as un monde en toi, un petit monde dont tu nâ€™as jamais fait la carte et tu roules dedans, hors piste. il faut la faire la carte, oui, câ€™est important. pour ne pas Ãªtre triste.",
--         14,
--         "7Ã 0 pages",
--         "20 x 11 cm",
--         "vmlslm.jpg",
--         "879-10-95630-78-4",
--         "livre brochÃ©"
--     )

-- ;

-- CATEGORY ------------------------------------------------------------------------------------------------

INSERT INTO publishinghouse_dev.category
VALUES
    ( NULL, "Fiction" ), 
    ( NULL, "PoÃ©sie" ), 
    ( NULL, "Autofiction" ), 
    ( NULL, "Bande dessinÃ©e" ), 
    ( NULL, "Essai" )
;

-- EVENTS

-- INSERT INTO publishinghouse_dev.events
-- VALUES
--     ( NULL, 
--     "SÃ©ance de dÃ©dicace : HÃ©loise BrÃ©zillon", 
--     "2025-12-02", 
--     "Venez vous faire dÃ©dicasser votre livre par l'autrice la plus innovante de sa gÃ©nÃ©ration !", 
--     "Librairie Les mots Ã  la bouche", false, 1 )
-- ;

-- ----------------------------------------------------------------------------------------
-- ---------------------------------TABLES DE JOINTURE ----------------------------------

-- pour les tables de jointures, on doit crÃ©er deux tables, on crÃ©e une transaction
-- choisir la table principale pour la transaction
-- crÃ©er une variable sql : une fonction sql qui va permettre de rÃ©cupÃ©rer le dernier identifiant insÃ©rÃ©



-- BOOK_AUTHOR----------------------------------------------------------------------------

-- requÃªte 1

-- START TRANSACTION;

-- INSERT INTO publishinghouse_dev.book
-- VALUE 
--     (NULL, "FATAL.E",
--         "2025-10-11",
--         "et Ã§a te comporte. Ã§a te comporte sans que tu ne le saches. tu roules les jours Ã  lâ€™aveugle. tu as un monde en toi, un petit monde dont tu nâ€™as jamais fait la carte et tu roules dedans, hors piste. il faut la faire la carte, oui, câ€™est important. pour ne pas Ãªtre triste.",
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









