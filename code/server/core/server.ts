import express from "express";
import AuthorRouter from "../router/author_router";
import BookRouter from "../router/book_router";
import CategoryRouter from "../router/category_router";
import Current_stateRouter from "../router/current_state_router";
import EventRouter from "../router/event_router";
import HomepageRouter from "../router/homepage_router";
import RoleRouter from "../router/role_router";
import VisitorRouter from "../router/visitor_router";

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
		this.router.use("/api/book", new BookRouter().getRoutes());
		this.router.use(
			"/api/current_state",
			new Current_stateRouter().getRoutes(),
		);
		this.router.use("/api/author", new AuthorRouter().getRoutes());
		this.router.use("/api/visitor", new VisitorRouter().getRoutes());
		this.router.use("/api/role", new RoleRouter().getRoutes());
		this.router.use("/api/event", new EventRouter().getRoutes());
	};

	// démarrer le serveur, comme c'est avec index.ts, c'est côté navigateur donc public
	public start = () => {
		return this.app;
	};
}

export default Server;
// default : export unique
// va exporter la class dans index.ts, qui est le point d'entrée de l'application
