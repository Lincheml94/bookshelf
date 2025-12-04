-- Rôles
INSERT INTO publishinghouse_dev.role (name) VALUES
('Admin'),
('Éditeur'),
('Auteur'),
('Visiteur');

-- Utilisateurs
INSERT INTO publishinghouse_dev.user (email, password, role_id) VALUES
('admin@editions.fr', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MrYQZ5X1Q5JqJ5J5J5J5J5J5J5J5J5J5', 1),
('editeur1@editions.fr', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MrYQZ5X1Q5JqJ5J5J5J5J5J5J5J5J5J5', 2),
('auteur1@editions.fr', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MrYQZ5X1Q5JqJ5J5J5J5J5J5J5J5J5J5', 3),
('auteur2@editions.fr', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MrYQZ5X1Q5JqJ5J5J5J5J5J5J5J5J5J5', 3),
('visiteur1@editions.fr', '$2a$10$N9qo8uLOickgx2ZMRZoMy.MrYQZ5X1Q5JqJ5J5J5J5J5J5J5J5J5J5', 4);

-- Newsletter
INSERT INTO publishinghouse_dev.newsletter (email) VALUES
('news1@editions.fr'),
('news2@editions.fr'),
('news3@editions.fr'),
('news4@editions.fr'),
('news5@editions.fr');

-- Visiteurs
INSERT INTO publishinghouse_dev.visitor (email, firstname, lastname) VALUES
('visiteur1@editions.fr', 'Jean', 'Dupont'),
('visiteur2@editions.fr', 'Marie', 'Martin'),
('visiteur3@editions.fr', 'Pierre', 'Durand'),
('visiteur4@editions.fr', 'Sophie', 'Lambert'),
('visiteur5@editions.fr', 'Luc', 'Bernard');

-- États des livres
INSERT INTO publishinghouse_dev.currentstate (statename) VALUES
('Disponible'),
('Épuisé'),
('Précommande'),
('Archivé');

-- Auteurs
INSERT INTO publishinghouse_dev.author (firstname, lastname, bio) VALUES
('Victor', 'Hugo', 'Écrivain, poète et dramaturge romantique français, auteur des Misérables et de Notre-Dame de Paris.'),
('Albert', 'Camus', 'Écrivain, philosophe et prix Nobel de littérature, connu pour L\'Étranger et La Peste.'),
('Marguerite', 'Yourcenar', 'Première femme élue à l\'Académie française, auteure de Mémoires d\'Hadrien.'),
('George', 'Orwell', 'Écrivain britannique, célèbre pour 1984 et La Ferme des animaux.'),
('J.K.', 'Rowling', 'Auteure britannique, créatrice de la saga Harry Potter.');

-- Livres
INSERT INTO publishinghouse_dev.book (title, published_at, description, price, pages, dimensions, images, isbn, print) VALUES
('Les Misérables', '1862-01-01', 'Un roman monumental qui suit la vie de Jean Valjean, ancien forçat en quête de rédemption.', 12.99, '1488', '15x23', 'miserables.jpg', '9782070401119', 'Poche'),
('L\'Étranger', '1942-01-01', 'Un roman existentialiste qui explore l\'absurdité de la condition humaine à travers Meursault.', 8.99, '160', '13x20', 'etranger.jpg', '9782070360024', 'Broché'),
('Mémoires d\'Hadrien', '1951-01-01', 'Un roman épistolaire qui retrace la vie de l\'empereur romain Hadrien.', 10.99, '416', '14x22', 'hadrien.jpg', '9782070299013', 'Relié'),
('1984', '1949-06-08', 'Une dystopie sur la surveillance totale et le totalitarisme, dans un monde où Big Brother vous observe.', 9.99, '328', '13x20', '1984.jpg', '9780451524935', 'Poche'),
('Harry Potter à l\'école des sorciers', '1997-06-26', 'Le premier tome de la saga Harry Potter, où un jeune sorcier découvre le monde de la magie.', 14.99, '312', '15x23', 'harry_potter1.jpg', '9782070518520', 'Broché');

-- Catégories
INSERT INTO publishinghouse_dev.category (name_) VALUES
('Roman'),
('Poésie'),
('Essai'),
('Science-Fiction'),
('Jeunesse'),
('Histoire'),
('Biographie');

-- Jointure : Livre - État
INSERT INTO publishinghouse_dev.book_currentstate (book_id, currentstate_id) VALUES
(1, 1), -- Les Misérables : Disponible
(2, 1), -- L'Étranger : Disponible
(3, 3), -- Mémoires d'Hadrien : Précommande
(4, 1), -- 1984 : Disponible
(5, 1); -- Harry Potter : Disponible

-- Jointure : Livre - Auteur
INSERT INTO publishinghouse_dev.book_author (book_id, author_id) VALUES
(1, 1), -- Les Misérables : Victor Hugo
(2, 2), -- L'Étranger : Albert Camus
(3, 3), -- Mémoires d'Hadrien : Marguerite Yourcenar
(4, 4), -- 1984 : George Orwell
(5, 5); -- Harry Potter : J.K. Rowling

-- Jointure : Livre - Catégorie
INSERT INTO publishinghouse_dev.book_category (book_id, category_id) VALUES
(1, 1), -- Les Misérables : Roman
(2, 1), -- L'Étranger : Roman
(3, 1), -- Mémoires d'Hadrien : Roman
(4, 4), -- 1984 : Science-Fiction
(5, 5); -- Harry Potter : Jeunesse

-- Événements
INSERT INTO publishinghouse_dev.events (title, date, description_, location, isComplete, book_id) VALUES
('Rencontre avec Victor Hugo', '2025-12-15 18:00:00', 'Soirée de dédicace et lecture autour des Misérables.', 'Librairie Parisienne, Paris', FALSE, 1),
('Conférence sur l\'absurde', '2026-01-20 19:00:00', 'Analyse de L\'Étranger par des spécialistes de Camus.', 'Université de Lyon', TRUE, 2),
('Lancement Mémoires d\'Hadrien', '2026-02-10 20:00:00', 'Soirée de lancement du nouveau tirage.', 'Bibliothèque Nationale, Paris', FALSE, 3),
('Débat sur la dystopie', '2026-03-05 18:30:00', 'Table ronde autour de 1984 et de sa pertinence aujourd\'hui.', 'Médiathèque de Bordeaux', FALSE, 4),
('Nuit Harry Potter', '2026-03-12 20:00:00', 'Soirée spéciale pour les 25 ans de la saga, avec quiz et projections.', 'Librairie Fantastique, Lille', FALSE, 5);

-- Jointure : Événement - Visiteur
INSERT INTO publishinghouse_dev.events_visitor (events_id, visitor_id) VALUES
(1, 1), -- Rencontre Victor Hugo : Jean Dupont
(1, 2), -- Rencontre Victor Hugo : Marie Martin
(2, 3), -- Conférence Camus : Pierre Durand
(3, 4), -- Lancement Mémoires d'Hadrien : Sophie Lambert
(4, 5), -- Débat dystopie : Luc Bernard
(5, 1), -- Nuit Harry Potter : Jean Dupont
(5, 2); -- Nuit Harry Potter : Marie Martin
