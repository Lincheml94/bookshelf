import express from "express";
import multer from "multer";
import BookController from "../controleur/book_controller";

class BookRouter {
	// routeur express
	private router = express.Router();

	// multer permet de gérer les transfert de fichiers
	private multer = multer({ dest: "public" });

	// liste des routes
	public getRoutes = () => {
		// créer une route /api accessible en GET
		// req et res peuvent être n'importe quel mot, par contre Request et Reponse sont figés, d'ailleurs il faut choisir ceux qui correspondent à express
		// le prefixe des routes est dans le serveur
		this.router.get("/", new BookController().index);

		// variable de route ; précédée par un :; suivie du nom de la variable
		this.router.get("/:id", new BookController().selectOne);

		// insérér un enregistrement
		// utilisation du middleware "multer"
		this.router.post("/", this.multer.any(), new BookController().insert);

		// mettre à jour un enregistrement
		// utilisation du middleware "multer"
		this.router.put("/", this.multer.any(), new BookController().update);

		// supprimer un enregistrement
		this.router.delete("/", new BookController().delete);

		// retourner le routeur
		return this.router;
	};
}

export default BookRouter;
