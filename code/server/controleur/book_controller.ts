import type { Request, Response } from "express";
import BookRepository from "../repository/book_repository";
import multer from "multer";
import FileServices from "../service/file_service";

class BookController {
	// Méthode reliée à la route en GET située dans le routeur
	// convention : nommer la première fonction "index"

	public index = async (req: Request, res: Response) => {
		const results = await new BookRepository().selectAll();

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
		const results = await new BookRepository().selectOne(req.params);

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

	public insert = async (req: Request, res: Response) => {
		console.log(req.body);

		// req.files permet de récupérer les fichiers transférés
		// console.log(req.files);
		const file = (req.files as Express.Multer.File[]).shift() as Express.Multer.File;

		// instancier le service de fichiers
		const fileServices = new FileServices();

		// Ajouter l'extension du fichiers
		const fullname = await fileServices.rename(file);

		// récupérer la variable de route
		// req.body : permet de récupérer la propriété body de la requête http
		const results = await new BookRepository().insert({ ...req.body, images: fullname, });
		
		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});
			return;
		}

			// renvoyer une réponse avec un code de statut HTTP et au format JSON
		// code 200 : requête traitée avec succès (voir p 5 du pdf 14
		// 201 : requête traitée avec succès, et création d'une ressource
		res.status(200).json({
			status: 200,
			message: "Created",
			data: results,
		});
		

	};

	public update = async (req: Request, res: Response) => {
		console.log(req.body);

		// récupérer la variable de route
		// req.body : permet de récupérer la propriété body de la requête http
		const results = await new BookRepository().update(req.body);

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message: process.env.NODE === "production" ? "error" : results.message,
			});
			return;
		}
		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		// code 200 : requête traitée avec succès (voir p 5 du pdf 14
		// 201 : requête traitée avec succès, et création d'une ressource
		res.status(200).json({
			status: 200,
			message: "Updated",
			data: results,
		});
	};

	public delete = async (req: Request, res: Response) => {
		// récupérer la variable de route
		// req.body : permet de récupérer la propriété body de la requête http
		const results = await new BookRepository().delete(req.body);

		// si la requête renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message: process.env.NODE === "production" ? "error" : results.message,
			});
			return;
		}
		// renvoyer une réponse avec un code de statut HTTP et au format JSON
		// code 200 : requête traitée avec succès (voir p 5 du pdf 14
		// 201 : requête traitée avec succès, et création d'une ressource
		res.status(200).json({
			status: 200,
			message: "Deleted",
			data: results,
		});
	};
}

export default BookController;
