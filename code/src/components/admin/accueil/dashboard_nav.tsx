"use client";
import { useState } from "react";
import { NavLink } from "react-router";
import style from "../../../assets/css/admin/dashboard.module.css";
import Arrow from "../../icones/arrow";
import LogoLivre from "../../icones/logo_livre";

const DashboardNav = () => {
	const [navDbMobileIsVisible, setnavDbMobileIsVisible] =
		useState<boolean>(false);

	const toggleMenu = () => {
		setnavDbMobileIsVisible(!navDbMobileIsVisible);
	};

	const closeMenu = () => {
		setnavDbMobileIsVisible(false);
	};

	const [navIsVisible, setnavIsVisible] = useState<boolean>(false);
	const [livresVisible, setLivresVisible] = useState(false);
	const [evenementsVisible, setEvenementsVisible] = useState(false);

	const handleClick = () => {
		setnavIsVisible(!navIsVisible);
		// console.log(navIsVisible);
		// console.log("clic !");
	};

	return (
		<>
			<div className={style.buttonarrow}>
				<button type="button" onClick={toggleMenu}>
					<Arrow />
				</button>
			</div>
			<nav
				className={`${style.dashboardnav} ${navDbMobileIsVisible ? style["navbar-dashboard-mobile-visible"] : ""}`}
			>
				<NavLink to={"/admin"}>
					<LogoLivre />
				</NavLink>

				<div className={style.links}>
					<div className={style.navgroups}>
						<button
							type="button"
							onClick={() => setLivresVisible(!livresVisible)}
							className={style.navbutton}
						>
							livres
						</button>
						{/* </NavLink> */}
						<div
							className={`${style.navdetails} ${livresVisible ? style["navlinks-visible"] : ""}`}
						>
							<NavLink to={"/admin/books"} onClick={closeMenu}>
								<p>Gestions des livres</p>
							</NavLink>
							<NavLink to={"/admin/books"} onClick={closeMenu}>
								<p>auteur.ice.s</p>
							</NavLink>
							<NavLink to={"/admin/books"} onClick={closeMenu}>
								<p>catégories</p>
							</NavLink>
							<NavLink to={"/admin/books"} onClick={closeMenu}>
								<p>états</p>
							</NavLink>
						</div>
					</div>
					<div className={style.navgroups}>
						{/* <NavLink to={"/admin/"} onClick={closeMenu}> */}
						<button
							type="button"
							onClick={() => setEvenementsVisible(!evenementsVisible)}
							className={style.navbutton}
						>
							Evènements
						</button>
						{/* </NavLink> */}
						<div
							className={`${style.navdetails} ${evenementsVisible ? style["navlinks-visible"] : ""}`}
						>
							<NavLink to={"/admin/agenda"} onClick={closeMenu}>
								<p>Gestion des évènements</p>
							</NavLink>
							<NavLink to={"/admin/agenda"} onClick={closeMenu}>
								<p>Inscriptions</p>
							</NavLink>
						</div>
					</div>

					<div className={style.navgroups}>
						<NavLink to={"/admin/newsletter"}>
							<button
								type="button"
								onClick={handleClick}
								className={style.navbutton}
							>
								newsletter
							</button>
						</NavLink>

						<div className={style.navdetails}></div>
					</div>
					<div className={style.navgroups}>
						<NavLink to={"/admin/users"}>
							<button
								type="button"
								onClick={handleClick}
								className={style.navbutton}
							>
								utilisateur.ice.s
							</button>
						</NavLink>
						<div className={style.navdetails}></div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default DashboardNav;
