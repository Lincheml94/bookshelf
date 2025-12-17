import type { QueryResult } from "mysql2";
import type { Book } from "../../models/book";
import type { Category } from "../../models/category";
import MySQLService from "../service/mysql_service";
import CategoryRepository from "./category_repository";

class BookRepository {
	// nom de la table SQL
	private table = "book";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<Book[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL

		const sql = `
            SELECT ${this.table}.*, 
			GROUP_CONCAT(book_id) AS category_ids

            FROM 
				${process.env.MYSQL_DATABASE}.${this.table}
			JOIN 
				${process.env.MYSQL_DATABASE}.book_category
			ON 
				book_category.book_id = book.id
			JOIN 
				${process.env.MYSQL_DATABASE}.category
			ON 
				category.id = book_category.category_id
			GROUP BY 
				${this.table}.id
			;
        `;
		// try / catch : récupérer les résultats de la requête ou une erreur
		try {
			// execution de la requête
			const [query] = await connection.execute(sql);

			// boucler sur les résultats pour récupérer les objets en relation (composition en POO)
			for (let i = 0; i < (query as Book[]).length; i++) {
				// récupérer un résultat
				const result = (query as Book[])[i] as Book;

				// table de jointure
				result.categories = (await new CategoryRepository().selectInList(
					result.category_ids,
				)) as Category[];
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
	public selectOne = async (data: Partial<Book>): Promise<Book | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// WHERE category.id = ... variable de requête : précédée d'un :, suivi du nom de la variable
		const sql = `
            SELECT ${this.table}.*, 
			GROUP_CONCAT(book_id) AS category_ids

            FROM 
				${process.env.MYSQL_DATABASE}.${this.table}
			JOIN 
				${process.env.MYSQL_DATABASE}.book_category
			ON 
				book_category.book_id = book.id
			JOIN 
				${process.env.MYSQL_DATABASE}.category
			ON 
				category.id = book_category.category_id
			WHERE 
				${this.table}.id = :id
			GROUP BY 
				${this.table}.id
			;
			;
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
			const result = (query as Book[]).shift() as Book;

			result.categories = (await new CategoryRepository().selectInList(
				result.category_ids,
			)) as Category[];

			// retourner les résultats
			return result;
		} catch (error) {
			return error;
		}
	};

	// sélectionner plusieurs enregistrements dans une list
	public selectInList = async (list: string): Promise<Book[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL

		const sql = `
            SELECT ${this.table}.*, 
			GROUP_CONCAT(book_id) AS category_ids

            FROM 
				${process.env.MYSQL_DATABASE}.${this.table}
			JOIN 
				${process.env.MYSQL_DATABASE}.book_category
			ON 
				book_category.book_id = book.id
			JOIN 
				${process.env.MYSQL_DATABASE}.category
			ON 
				category.id = book_category.category_id
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
			const result = (query as Book[]).shift() as Book;

			// table de jointure
			result.categories = (await new CategoryRepository().selectInList(
				result.category_ids,
			)) as Category[];

			return query;
		} catch (error) {
			return error;
		}
	};

	// insérer un enregistrement
	public insert = async (
		data: Partial<Book>,
	): Promise<QueryResult | unknown> => {
		// connexion au serveur mysql
		const connection = await new MySQLService().connect();

		// requête SQL
		// Dans VALUE, on crée des variables de requête, pour éviter les injections SQL (les attaques)
		// les variables s'écrivent avec deux points
		let sql = `
		INSERT INTO 
			${process.env.MYSQL_DATABASE}.${this.table}
		VALUE
			(
				NULL, 
				:title, 
				:published_at, 
				:description, 
				:price, 
				:pages, 
				:dimensions, 
				:images, 
				:isbn, 
				:print
			)
			;

		`;

		// try / catch : exécuter requête / récupérer les résultats ou une erreur
		try {
			// démarrer une transaction SQL
			connection.beginTransaction();

			// exécution de la première requête
			await connection.execute(sql, data);

			// execution de la requête

			// deuxième requête
			sql = `SET @id = LAST_INSERT_ID();`;
			// exécution de la deuxième requête
			await connection.execute(sql, data);

			// troisième requête
			const joinIds = data.category_ids
				?.split(",")
				.map((value) => `(${value}, @id)`)
				.join();
			console.log(joinIds);

			sql = `
				INSERT INTO 
					${process.env.MYSQL_DATABASE}.book_category
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
}

export default BookRepository;
