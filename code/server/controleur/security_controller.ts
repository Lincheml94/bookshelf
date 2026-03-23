import argon2 from "argon2";
import type { Request, Response } from "express";
import SecurityRepository from "../repository/security_repository";

class SecurityController {
	// Enregistrement d'un.e utilisateur.ice

	public register = async (req: Request, res: Response) => {
		console.log(req);

		const results = await new SecurityRepository().register({
			...req.body,
			password: await argon2.hash(req.body.password),
		});

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
		res.status(201).json({
			status: 201,
			message: "Created",
			data: results,
		});
	};
}

export default SecurityController;
