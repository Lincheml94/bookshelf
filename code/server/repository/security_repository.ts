import type { QueryResult } from "mysql2";
import type { User } from "../../models/user";
import MySQLService from "../service/mysql_service";

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
}

export default SecurityRepository;
