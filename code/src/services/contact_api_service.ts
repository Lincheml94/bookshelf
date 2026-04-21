import type { InsertOneResult } from "mongodb";
import type { Contact } from "../../models/contact";
import type { ApiResponse } from "../models/api_response";

class ContactApiService {
	// préfixe de l'API (utilisé pour les requêtes)
	private prefix = "/api/contact";

	// sélection de tous les enregistrements
	public selectAll = async (): Promise<ApiResponse<Contact[]>> => {
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

	public insert = async (
		data: Contact,
	): Promise<ApiResponse<InsertOneResult>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/`,
			{
				method: "post",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
		const response = await fetch(request);

		const results = await response.json();

		return results;
	};
}

export default ContactApiService;
