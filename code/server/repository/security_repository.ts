import type { QueryResult } from "mysql2";
import type { Role } from "../../models/role";
import type { User } from "../../models/user";
import MySQLService from "../service/mysql_service";
import RoleRepository from "./role_repository";

class SecurityRepository {
	// nom de la table SQL
	private table = "user";

	// Enregistrer un.e utilisateur.ice
	public register = async (
		data: Partial<User>,
	): Promise<QueryResult | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL

		const sql = `
            INSERT INTO ${process.env.MYSQL_DATABASE}.${this.table}
            VALUE (
                NULL,
                :email,
                :password,
                2
            )
            ;
        `;
		// try / catch : récupérer les résultats de la requête ou une erreur
		try {
			// execution de la requête
			const [query] = await connection.execute(sql, data);

			return query;
		} catch (error) {
			return error;
		}
	};

	public isEmailUserExists = async (
		data: Partial<User>,
	): Promise<boolean | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		const sql = `
            SELECT ${this.table}.*
            FROM ${process.env.MYSQL_DATABASE}.${this.table}
            WHERE ${this.table}.email = :email
            ;
        `;

		// try / catch : récupérer les résultats de la requête ou une erreur
		try {
			// exécution de la requête
			const [query] = await connection.execute(sql, data);
			// console.log(query);

			// retourner les résultats
			// si l'email existe
			if ((query as []).length > 0) return true; // Si query a une longueur supérieur à zéro : l'email existe (true)

			return false;
		} catch (error) {
			return error;
		}
	};

	public selectOneByEmail = async (
		data: Partial<User>,
	): Promise<User | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect(); // requête SQL
		// variable de requête : précédée d'un :, suivi du nom de la variable
		// requêtes préparées (utilisation des variables de requêtes) : la requête est exécutée si elle ne réprésente pas de risque de sécurité
		const sql = `
            SELECT ${this.table}.*
            FROM ${process.env.MYSQL_DATABASE}.${this.table}
            WHERE ${this.table}.email = :email
            ;
        `;

		// try / catch : récupérer les résultats de la requête ou une erreur
		try {
			// exécution de la requête
			// si la requête possède des variables, utiliser le paramètre de la méthode
			const [query] = await connection.execute(sql, data);

			// shift :récupérer le premier indice d'un array
			const result = (query as User[]).shift() as User;

			// clés étrangères
			result.role = (await new RoleRepository().selectOne({
				id: result.role_id,
			})) as Role;

			// retourner les résultats
			return result;
		} catch (error) {
			return error;
		}
	};
}

export default SecurityRepository;
