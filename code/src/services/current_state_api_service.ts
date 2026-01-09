import type { Currentstate } from "../../models/currentstate";
import type { ApiResponse } from "../models/api_response";

class CurrentStateApiService {
	// préfixe de l'API (utilisé pour les requêtes)
	private prefix = "/api/currentstate";

	// sélection de tous les enregistrements
	public selectAll = async (): Promise<ApiResponse<Currentstate[]>> => {
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

	public selectOne = async (id:number): Promise<ApiResponse<Currentstate>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/${id}`,
		);
		const response = await fetch(request);

		const results = await response.json();

		return results;
	};
}

export default CurrentStateApiService;
