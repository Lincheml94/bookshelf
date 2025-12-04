import express from "express";
import CategoryRouter from "../router/category_router";
import HomepageRouter from "../router/homepage_router";

class Server {
	// propriétés pour stocker
	private app = express();
	private router = express.Router();

	// Constructeur
	constructor() {
		// relier le routeur à l'application
		this.app.use(this.router);

		// appel des routeurs
		this.routersList();
	}
	// méthodes
	// liste des routeurs
	private routersList = () => {
		// créer un prefixe à toutes les routes inclues dans un routeur
		this.router.use("/api", new HomepageRouter().getRoutes());
		this.router.use("/api/category", new CategoryRouter().getRoutes());
	};

	// démarrer le serveur, comme c'est avec index.ts, c'est côté navigateur donc public
	public start = () => {
		return this.app;
	};
}

export default Server;
// default : export unique
// va exporter la class dans index.ts, qui est le point d'entrée de l'application
