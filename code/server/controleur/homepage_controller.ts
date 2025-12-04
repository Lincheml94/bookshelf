import type { Request, Response } from "express";

class HomepageController {
	// Méthode reliée à la route en GET située dans le routeur
	// convention : nommer la première fonction "index"

	public index = (req: Request, res: Response) => {
		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		// code 200 : requête traitée avec succès (voir p 5 du pdf 14)
		res.status(200).json({
			status: 200,
			message: "Bookshelf API",
		});
	};
}

export default HomepageController;
