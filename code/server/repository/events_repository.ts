import type { Book } from "../../models/book";
import type { Events } from "../../models/events";
import MySQLService from "../service/mysql_service";
import BookRepository from "./book_repository";

class EventsRepository {
	// nom de la table SQL
	private table = "events";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<Events[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// SELECT category.* FROM publishinghouse_dev.category
		const sql = `
            SELECT ${this.table}.* 
            FROM ${process.env.MYSQL_DATABASE}.${this.table}
        `;
		// try / catch : récupérer les résultats de la requête ou une erreur
		try {
			// execution de la requête
			const [query] = await connection.execute(sql);

			// boucler sur les résultats pour récupérer les objets en relation (composition en POO)
			for (let i = 0; i < (query as Events[]).length; i++) {
				// récupérer un résultat
				const result = (query as Events[])[i] as Events;

				// clés étrangères
				result.book = (await new BookRepository().selectOne({
					id: result.book_id,
				})) as Book;
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
		data: Partial<Events>,
	): Promise<Events | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// WHERE category.id = ... variable de requête : précédée d'un :, suivi du nom de la variable
		const sql = `
            SELECT ${this.table}.* 
            FROM ${process.env.MYSQL_DATABASE}.${this.table}
			WHERE ${this.table}.id = :id
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
			const result = (query as Events[]).shift() as Events;

			// clés étrangères
			result.book = (await new BookRepository().selectOne({
				id: result.book_id,
			})) as Book;

			// retourner les résultats
			return result;
		} catch (error) {
			return error;
		}
	};
}

export default EventsRepository;
