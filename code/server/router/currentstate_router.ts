import express from "express";
import CurrentstateController from "../controleur/currentstate_controller";

class CurrentstateRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// créer une route /api accessible en GET
		// req et res peuvent être n'importe quel mot, par contre Request et Reponse sont figés, d'ailleurs il faut choisir ceux qui correspondent à express
		// le prefixe des routes est dans le serveur
		this.router.get("/", new CurrentstateController().index);

		// variable de route ; précédée par un :; suivie du nom de la variable
		this.router.get("/:id", new CurrentstateController().selectOne);
		// retourner le routeur
		return this.router;
	};
}

export default CurrentstateRouter;
