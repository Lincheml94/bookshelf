import express from "express";
import Current_stateController from "../controleur/current_state_controller";

class Current_stateRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// créer une route /api accessible en GET
		// req et res peuvent être n'importe quel mot, par contre Request et Reponse sont figés, d'ailleurs il faut choisir ceux qui correspondent à express
		// le prefixe des routes est dans le serveur
		this.router.get("/", new Current_stateController().index);

		// variable de route ; précédée par un :; suivie du nom de la variable
		this.router.get("/:id", new Current_stateController().selectOne);
		// retourner le routeur
		return this.router;
	};
}

export default Current_stateRouter;
