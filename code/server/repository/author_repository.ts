import type { Author } from "../../models/author";
import type { Book } from "../../models/book";
import MySQLService from "../service/mysql_service";
import BookRepository from "./book_repository";

class AuthorRepository {
	// nom de la table SQL
	private table = "author";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<Author[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// SELECT category.* FROM publishinghouse_dev.category
		const sql = `
            SELECT ${this.table}.*,
            GROUP_CONCAT(book_id) AS book_ids

            FROM 
				${process.env.MYSQL_DATABASE}.${this.table}
			JOIN 
				${process.env.MYSQL_DATABASE}.book_author
			ON 
				book_author.author_id = author.id
			JOIN 
				${process.env.MYSQL_DATABASE}.book
			ON 
				book.id = book_author.book_id
			GROUP BY 
				${this.table}.id
			;
        `;
		// try / catch : récupérer les résultats de la requête ou une erreur
		try {
			// execution de la requête
			const [query] = await connection.execute(sql);

			// boucler sur les résultats pour récupérer les objets en relation (composition en POO)
			for (let i = 0; i < (query as Author[]).length; i++) {
				// récupérer un résultat
				const result = (query as Author[])[i] as Author;

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
		data: Partial<Author>,
	): Promise<Author | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// WHERE category.id = ... variable de requête : précédée d'un :, suivi du nom de la variable
		const sql = `
            SELECT ${this.table}.*,
            GROUP_CONCAT(book_id) AS book_ids

            FROM 
				${process.env.MYSQL_DATABASE}.${this.table}
			JOIN 
				${process.env.MYSQL_DATABASE}.book_author
			ON 
				book_author.author_id = author.id
			JOIN 
				${process.env.MYSQL_DATABASE}.book
			ON 
				book.id = book_author.book_id
			WHERE 
				${this.table}.id = :id	
			GROUP BY 
				${this.table}.id
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
			const result = (query as Author[]).shift() as Author;

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
	public selectInList = async (list: string): Promise<Author[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL

		const sql = `
           SELECT ${this.table}.*,
            GROUP_CONCAT(book_id) AS book_ids

            FROM 
				${process.env.MYSQL_DATABASE}.${this.table}
			JOIN 
				${process.env.MYSQL_DATABASE}.book_author
			ON 
				book_author.author_id = author.id
			JOIN 
				${process.env.MYSQL_DATABASE}.book
			ON 
				book.id = book_author.book_id
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
}

export default AuthorRepository;
