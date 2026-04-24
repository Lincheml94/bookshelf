import type { Request, Response } from "express";
import ContactRepository from "../repository/contact_repository";

class ContactController {
	// Méthode reliée à la route en GET située dans le routeur
	// convention : nommer la première fonction "index"

	public index = async (req: Request, res: Response) => {
		const results = await new ContactRepository().selectAll();

		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		// code 200 : requête traitée avec succès (voir p 5 du pdf 14)
		res.status(200).json({
			status: 200,
			message: "ça fonctionne",
			data: results,
		});
	};

	public insert = async (req: Request, res: Response) => {
		const results = await new ContactRepository().insert({
			...req.body,
			date: new Date(),
		});

		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		// code 200 : requête traitée avec succès (voir p 5 du pdf 14)
		res.status(201).json({
			status: 201,
			message: "Created",
			data: results,
		});
	};
}

export default ContactController;
