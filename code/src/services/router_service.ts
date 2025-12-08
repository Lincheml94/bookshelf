import type { unstable_RSCRouteConfig as RSCRouteConfig } from "react-router";

class RouterService {
	public getRouter = () => {
		return [
			{
				// identifiant unique de la mise en page
				id: "root",
				// préfixe des routes
				path: "",
				// importation de la mise en pageparente
				lazy: () => import("../layouts/root_layout"),

				children: [
					{
						id: "public",
						path: "",
						lazy: () => import("../layouts/public_layout"),

						children: [
							{
								id: "home",
								// premiere route de notre app : index
								index: true,
								lazy: () => import("../pages/index"),
							},
						],
					},

					// children : admin_layout comme deuxième enfant de root_layout
					// 	{
					// 		id: "about",
					// 		path: "about",
					// 		lazy: () => import("./about/route"),
					// 	},
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouterService;
