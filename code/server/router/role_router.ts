import express from "express";
import RoleController from "../controleur/role_controller";

class RoleRouter {
	// routeur express
	private router = express.Router();

	// liste des routes
	public getRoutes = () => {
		// créer une route /api accessible en GET
		// req et res peuvent être n'importe quel mot, par contre Request et Reponse sont figés, d'ailleurs il faut choisir ceux qui correspondent à express
		// le prefixe des routes est dans le serveur
		this.router.get("/", new RoleController().index);

		// variable de route ; précédée par un :; suivie du nom de la variable
		this.router.get("/:id", new RoleController().selectOne);
		// retourner le routeur
		return this.router;
	};
}

export default RoleRouter;
