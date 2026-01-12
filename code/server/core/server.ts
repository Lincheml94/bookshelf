import express from "express";
import AuthorRouter from "../router/author_router";
import BookRouter from "../router/book_router";
import CategoryRouter from "../router/category_router";
import Current_stateRouter from "../router/currentstate_router";
import EventRouter from "../router/events_router";
import HomepageRouter from "../router/homepage_router";
import RoleRouter from "../router/role_router";
import UserRouter from "../router/user_router";
import VisitorRouter from "../router/visitor_router";
import cors from 'cors';

class Server {
	// propriétés pour stocker
	private app = express();
	private router = express.Router();

	// Constructeur
	constructor() {
		// intégrer le middleware express JSON qui permet de récupérer la propriété body de la requête HTTP en JSON
		this.app.use(express.json());

		// intégrer le middleware CORS - Cross Origin Ressource Sharing - qui permet d'autoriser l'accès aux ressouces à certaines origines différentes (protocole, port, sous-domaine)
		this.app.use(cors({
			origin:process.env.ORIGINS?.split(",")
		}));

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
		this.router.use("/api/currentstate", new Current_stateRouter().getRoutes());
		this.router.use("/api/author", new AuthorRouter().getRoutes());
		this.router.use("/api/visitor", new VisitorRouter().getRoutes());
		this.router.use("/api/role", new RoleRouter().getRoutes());
		this.router.use("/api/events", new EventRouter().getRoutes());
		this.router.use("/api/user", new UserRouter().getRoutes());
	};

	// démarrer le serveur, comme c'est avec index.ts, c'est côté navigateur donc public
	public start = () => {
		return this.app;
	};
}

export default Server;
// default : export unique
// va exporter la class dans index.ts, qui est le point d'entrée de l'application
