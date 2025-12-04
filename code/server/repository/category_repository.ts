import type { Category } from "../../models/category";
import MySQLService from "../service/mysql_service";

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
            SELECT ${this.table}.* 
            FROM ${process.env.MYSQL_DATABASE}.${this.table}
        `;
		// try / catch : récupérer les résultats de la requête ou une erreur
		try {
			// execution de la requête
			const query = await connection.execute(sql);
			return query;
		} catch (error) {
			return error;
		}
	};
}

export default CategoryRepository;
