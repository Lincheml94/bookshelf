import type { User } from "../../models/user";
import type { ApiResponse } from "../models/api_response";

class UserApiService {
	// préfixe de l'API (utilisé pour les requêtes)
	private prefix = "/api";
	// sélection de tous les enregistrements
	public selectAll = async (): Promise<ApiResponse<User[]>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
		);
		// exécuter la requête
		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes(objets, array) en chaine de caractère
		// désérialiser : convertir une chaîne de caractère en données complexes (objets, array…)

		const results = await response.json();

		// retourner les résultats
		return results;
	};
}

export default UserApiService;
