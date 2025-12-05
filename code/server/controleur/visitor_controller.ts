import type { Request, Response } from "express";
import VisitorRepository from "../repository/visitor_repository";

class VisitorController {
	// Méthode reliée à la route en GET située dans le routeur
	// convention : nommer la première fonction "index"

	public index = async (req: Request, res: Response) => {
		const results = await new VisitorRepository().selectAll();

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message: process.env.NODE === "production" ? "error" : results.message,
			});
			return;
		}
		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		// code 200 : requête traitée avec succès (voir p 5 du pdf 14)
		res.status(200).json({
			status: 200,
			message: "ça fonctionne",
			data: results,
		});
	};

	public selectOne = async (req: Request, res: Response) => {
		// récupérer la variable de route
		// req.params : permet de récupérer les variables de la route
		const results = await new VisitorRepository().selectOne(req.params);

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message: process.env.NODE === "production" ? "error" : results.message,
			});
			return;
		}
		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		// code 200 : requête traitée avec succès (voir p 5 du pdf 14)
		res.status(200).json({
			status: 200,
			message: "ça fonctionne",
			data: results,
		});
	};
}

export default VisitorController;
