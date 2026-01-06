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
								path: "",
								lazy: () => import("../pages/index"),
							},
							{
								id: "info",
								path: "info",
								lazy: () => import("../pages/info"),
							},
							{
								id: "catalogue",
								path: "catalogue",
								lazy: () => import("../pages/catalogue"),
							},
							{
								id: "agenda",
								path: "agenda",
								lazy: () => import("../pages/agenda"),
							},
							{
								id: "mentions_legales",
								path: "mentions_legales",
								lazy: () => import("../pages/mentions_legales"),
							},
							{
								id: "register",
								path: "register",
								lazy: () => import("../pages/register"),
							},
							{
								id: "login",
								path: "login",
								lazy: () => import("../pages/login"),
							},
							{
								id: "catalogue_detail",
								path: "book/:id",
								lazy: () => import("../pages/catalogue_detail"),
							},
						],
					},
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouterService;
