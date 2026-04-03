import type { QueryResult } from "mysql2";
import type { Book } from "../../models/book";
import type { Category } from "../../models/category";
import MySQLService from "../service/mysql_service";
import BookRepository from "./book_repository";

class CategoryRepository {
	// nom de la table SQL
	private table = "category";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<Category[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// SELECT category.* FROM publishinghouse_dev.category

		const sql = `
            SELECT ${this.table}.*,
			GROUP_CONCAT(book_id) AS book_ids

            FROM 
				${process.env.MYSQL_DATABASE}.${this.table}
			LEFT JOIN 
				${process.env.MYSQL_DATABASE}.book_category
			ON 
				book_category.category_id = category.id
			LEFT JOIN 
				${process.env.MYSQL_DATABASE}.book
			ON 
				book.id = book_category.book_id
			GROUP BY 
				${this.table}.id
			;
        `;
		// try / catch : récupérer les résultats de la requête ou une erreur
		try {
			// execution de la requête
			const [query] = await connection.execute(sql);

			// boucler sur les résultats pour récupérer les objets en relation (composition en POO)
			for (let i = 0; i < (query as Category[]).length; i++) {
				// récupérer un résultat
				const result = (query as Category[])[i] as Category;

				// table de jointure
				result.books = (await new BookRepository().selectInList(
					result.book_ids,
				)) as Book[];
			}

			return query;
		} catch (error) {
			return error;
		}
	};

	// sélectionner un enregistrement
	// Partial : on va utiliser une partie des propriétés d'un objet
	// exemple : on veut seulement l'id et non l'id ET le name (etc)
	// data représente une partie des propriétés du type
	public selectOne = async (
		data: Partial<Category>,
	): Promise<Category | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// WHERE category.id = ... variable de requête : précédée d'un :, suivi du nom de la variable
		const sql = `
            SELECT ${this.table}.*,
			GROUP_CONCAT(book_id) AS book_ids

            FROM 
				${process.env.MYSQL_DATABASE}.${this.table}
			LEFT JOIN 
				${process.env.MYSQL_DATABASE}.book_category
			ON 
				book_category.category_id = category.id
			LEFT JOIN 
				${process.env.MYSQL_DATABASE}.book
			ON 
				book.id = book_category.book_id

			WHERE ${this.table}.id = :id	
			
			GROUP BY 
				${this.table}.id;
	
			
        `;
		// try / catch : récupérer les résultats de la requête ou une erreur
		try {
			// execution de la requête
			// Si la requête possède des variables, utiliser les paramètres de la méthode (ici: data)
			// requêtes préparées (utilisations des variables de requêtes) : ça sert à améliorer la sécurité, le système va évaluer la sécurité de la requête
			// la requête est exécutée uniquement si elle ne présente pas de risque
			const [query] = await connection.execute(sql, data);

			// récupérer le premier indice d'un tableau
			// as permet de "transtyper". Dire que query est un tableau
			// shift : récupérer le premier indice d'un array
			const result = (query as Category[]).shift() as Category;

			// table de jointure
			result.books = (await new BookRepository().selectInList(
				result.book_ids,
			)) as Book[];

			// retourner les résultats
			return result;
		} catch (error) {
			return error;
		}
	};

	// sélectionner plusieurs enregistrements dans une list
	public selectInList = async (list: string): Promise<Category[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL

		const sql = `
            SELECT ${this.table}.*, 
			GROUP_CONCAT(book_id) AS book_ids

            FROM 
				${process.env.MYSQL_DATABASE}.${this.table}
			LEFT JOIN 
				${process.env.MYSQL_DATABASE}.book_category
			ON 
				book_category.category_id = category.id
			LEFT JOIN 
				${process.env.MYSQL_DATABASE}.book
			ON 
				book.id = book_category.book_id
			WHERE 
				${this.table}.id IN (${list})
			GROUP BY 
				${this.table}.id
			;

		`;

		// try / catch : récupérer les résultats de la requête ou une erreur
		try {
			// execution de la requête
			const [query] = await connection.execute(sql);
			// récupérer le premier indice d'un tableau
			// as permet de "transtyper". Dire que query est un tableau
			// shift : récupérer le premier indice d'un array
			// const result = (query as Category[]).shift() as Category;

			// table de jointure
			// result.books = (await new BookRepository().selectInList(
			// 	result.book_ids,
			// )) as Book[];

			return query;
		} catch (error) {
			return error;
		}
	};

	public insert = async (
		data: Partial<Category>,
	): Promise<QueryResult | unknown> => {
		// connexion au serveur mysql
		const connection = await new MySQLService().connect();

		// requête SQL
		// Dans VALUE, on crée des variables de requête, pour éviter les injections SQL (les attaques)
		// les variables s'écrivent avec deux points
		let sql = `
			INSERT INTO 
				${process.env.MYSQL_DATABASE}.${this.table}
			VALUES 
				(
					NULL, 
					:name
				)
				;
			`;

		// try / catch : exécuter requête / récupérer les résultats ou une erreur
		try {
			// démarrer une transaction SQL
			connection.beginTransaction();

			// exécution de la première requête
			await connection.execute(sql, data);

			// deuxième requête
			sql = `SET @id = LAST_INSERT_ID();`;
			// exécution de la deuxième requête
			await connection.execute(sql, data);

			// troisième requête
			const joinIds = (data.book_ids as string)
				?.split(",")
				.map((value) => `(@id, ${value})`)
				.join();
			// console.log(joinIds);

			sql = `
					INSERT INTO 
						${process.env.MYSQL_DATABASE}.book_category (book_id, category_id)
					VALUES
							
					${joinIds}
					;
				
					`;

			const [query] = await connection.execute(sql, data);

			// valider la transition SQL
			connection.commit();

			// retourner les informations de la requête
			return query;
		} catch (error) {
			// annuler une transaction
			connection.rollback();

			return error;
		}
	};

	// public update = async (
	// 	data: Partial<Book>,
	// ): Promise<QueryResult | unknown> => {
	// 	// console.log(data);

	// 	const connection = await new MySQLService().connect();

	// 	console.log(data);

	// 	let sql = `
	// UPDATE
	// 	${process.env.MYSQL_DATABASE}.${this.table}
	// SET
	// 	${this.table}.title = :title,
	// 	${this.table}.published_at = :published_at,
	// 	${this.table}.description = :description,
	// 	${this.table}.price = :price,
	// 	${this.table}.pages = :pages,
	// 	${this.table}.dimensions = :dimensions,
	// 	${this.table}.images = :images,
	// 	${this.table}.isbn = :isbn,
	// 	${this.table}.print = :print
	// WHERE
	// 	${this.table}.id = :id
	// ;
	// `;

	// 	try {
	// 		// démarrer une transaction SQL
	// 		connection.beginTransaction();

	// 		// exécution de la première requête
	// 		await connection.execute(sql, data);

	// 		// deuxième requête
	// 		sql = `
	// 			DELETE FROM
	// 				${process.env.MYSQL_DATABASE}.book_category
	// 			WHERE
	// 				book_category.book_id = :id
	// 			;

	// 		`;

	// 		// // exécution de la deuxième requête
	// 		await connection.execute(sql, data);

	// 		sql = `
	// 			DELETE FROM
	// 				${process.env.MYSQL_DATABASE}.book_currentstate
	// 			WHERE
	// 				book_currentstate.book_id = :id
	// 			;

	// 		`;

	// 		// exécution de la deuxième requête
	// 		await connection.execute(sql, data);

	// 		sql = `
	// 			DELETE FROM
	// 				${process.env.MYSQL_DATABASE}.book_author
	// 			WHERE
	// 				book_author.book_id = :id
	// 			;

	// 		`;
	// 		// // exécution de la deuxième requête
	// 		await connection.execute(sql, data);

	// 		// --------------------------------------------------------------------------------
	// 		// // troisième requête : BOOK_CATEGORY
	// 		let joinIds = (data.category_ids as string)
	// 			?.split(",")
	// 			// .filter(v => v)
	// 			.map((value) => `(:id, ${value})`)
	// 			.join();
	// 		// console.log(joinIds);

	// 		sql = `
	// 			INSERT INTO
	// 				${process.env.MYSQL_DATABASE}.book_category (book_id, category_id)
	// 			VALUES
	// 			${joinIds}
	//  	;
	// `;

	// 		await connection.execute(sql, data);

	// 		// // troisième requête : BOOK_CURRENTSTATE
	// 		joinIds = (data.currentstate_ids as string)
	// 			?.split(",")
	// 			// .filter(v => v)
	// 			.map((value) => `(:id, ${value})`)
	// 			.join();

	// 		sql = `
	// 			INSERT INTO
	// 				${process.env.MYSQL_DATABASE}.book_currentstate (book_id, currentstate_id)
	// 			VALUES
	// 			${joinIds}
	//  	;
	// `;
	// 		await connection.execute(sql, data);

	// 		// BOOK_AUTHOR
	// 		joinIds = (data.author_ids as string)
	// 			?.split(",")
	// 			// .filter(v => v)
	// 			.map((value) => `(:id, ${value})`)
	// 			.join();

	// 		sql = `
	// 			INSERT INTO
	// 				${process.env.MYSQL_DATABASE}.book_author (book_id, author_id)
	// 			VALUES
	// 			${joinIds}
	//  	;
	// `;

	// 		const [query] = await connection.execute(sql, data);

	// 		// valider la transition SQL
	// 		connection.commit();

	// 		// retourner les informations de la requête
	// 		return query;
	// 	} catch (error) {
	// 		await connection.rollback();
	// 		return error;
	// 	}
	// };

	// public delete = async (
	// 	data: Partial<Book>,
	// ): Promise<QueryResult | unknown> => {
	// 	// connexion au serveur mysql
	// 	const connection = await new MySQLService().connect();

	// 	// requête SQL
	// 	// Dans VALUE, on crée des variables de requête, pour éviter les injections SQL (les attaques)
	// 	// les variables s'écrivent avec deux points
	// 	let sql = `

	// 			DELETE FROM
	// 				${process.env.MYSQL_DATABASE}.book_category
	// 			WHERE
	// 				book_category.book_id = :id
	// 			;

	// 		`;

	// 	// try / catch : exécuter requête / récupérer les résultats ou une erreur
	// 	try {
	// 		// démarrer une transaction SQL
	// 		connection.beginTransaction();

	// 		// exécution de la première requête
	// 		await connection.execute(sql, data);

	// 		sql = `
	//             DELETE FROM
	//                 ${process.env.MYSQL_DATABASE}.events_visitor
	//             WHERE
	//                 events_id IN (SELECT id FROM ${process.env.MYSQL_DATABASE}.events WHERE book_id = :id)
	//             ;
	//         `;
	// 		// exécution de la requête pour les visiteurs
	// 		await connection.execute(sql, data);

	// 		// // execution de la requête

	// 		// deuxième requête
	// 		sql = `
	// 			DELETE FROM
	// 				${process.env.MYSQL_DATABASE}.events
	// 			WHERE
	// 				events.book_id = :id
	// 			;

	// 		`;
	// 		// exécution de la deuxième requête
	// 		await connection.execute(sql, data);

	// 		// // deuxième requête
	// 		sql = `
	// 			DELETE FROM
	// 				${process.env.MYSQL_DATABASE}.book_currentstate
	// 			WHERE
	// 				book_currentstate.book_id = :id
	// 			;

	// 		`;
	// 		// // exécution de la deuxième requête
	// 		await connection.execute(sql, data);

	// 		sql = `
	// 			DELETE FROM
	// 				${process.env.MYSQL_DATABASE}.book_author
	// 			WHERE
	// 				book_author.book_id = :id
	// 			;

	// 		`;
	// 		// exécution de la deuxième requête
	// 		await connection.execute(sql, data);

	// 		sql = `
	// 			DELETE FROM
	// 				${process.env.MYSQL_DATABASE}.${this.table}
	// 			WHERE
	// 				${this.table}.id = :id
	// 			;

	// 		`;
	// 		const [query] = await connection.execute(sql, data);

	// 		// valider la transition SQL
	// 		connection.commit();

	// 		// retourner les informations de la requête
	// 		return query;
	// 	} catch (error) {
	// 		// annuler une transaction
	// 		connection.rollback();

	// 		return error;
	// 	}
	// };
}

export default CategoryRepository;
