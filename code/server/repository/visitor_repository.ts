import type { Visitor } from "../../models/visitor";
import MySQLService from "../service/mysql_service";

class VisitorRepository {
	// nom de la table SQL
	private table = "visitor";

	// sélectionner tous les enregistrements
	public selectAll = async (): Promise<Visitor[] | unknown> => {
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
		data: Partial<Visitor>,
	): Promise<Visitor | unknown> => {
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
			const result = (query as Visitor[]).shift();

			// retourner les résultats
			return result;
		} catch (error) {
			return error;
		}
	};
}

export default VisitorRepository;
