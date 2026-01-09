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
				
					 // 🔐 ADMIN
					{
						id: "admin",
						path: "admin",
						lazy: () => import("../layouts/admin_layout"),

						children: [
						{
							id: "admin_home",
							path: "dashboard",
							index: true,
							lazy: () => import("../pages/admin/index"),
						},
						{
							id: "admin_login",
							path: "login",
							lazy: () => import("../pages/admin/login"),
						},
						{
							id: "admin_register",
							path: "register",
							lazy: () => import("../pages/admin/register"),
						},
						{
							id: "admin_agenda",
							path: "agenda",
							lazy: () => import("../pages/admin/agenda/index"),
						},
						{
							id: "agenda_form",
							path: "agenda_form",
							lazy: () => import("../pages/admin/agenda/admin_agenda_form"),
						},
						{
							id: "admin_books",
							path: "books",
							lazy: () => import("../pages/admin/book/index"),
						},
						{
							id: "book_form",
							path: "book_form",
							lazy: () => import("../pages/admin/book/admin_book_form"),
						},
						],
					},

					// PUBLIC 

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
								id: "contact",
								path: "contact",
								lazy: () => import("../pages/contact"),
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
								id: "login",
								path: "login",
								lazy: () => import("../pages/admin/login"),
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
