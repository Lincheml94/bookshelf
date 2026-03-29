"use client";
import { useState } from "react";
import { NavLink } from "react-router";
import style from "../../../assets/css/admin/dashboard.module.css";
import Arrow from "../../icones/arrow";
import LogoLivre from "../../icones/logo_livre";

const DashboardNav = () => {
	const [navDbMobileSIsVisible, setnavDbMobileSIsVisible] =
		useState<boolean>(false);

	const toggleMenu = () => {
		setnavDbMobileSIsVisible(!navDbMobileSIsVisible);
	};

	const closeMenu = () => {
		setnavDbMobileSIsVisible(false);
	};
	return (
		<>
			<div className={style.buttonarrow}>
				<button type="button" onClick={toggleMenu}>
					<Arrow />
				</button>
			</div>
			<nav
				className={`${style.dashboardnav} ${navDbMobileSIsVisible ? style["navbar-dashboard-mobile-visible"] : ""}`}
			>
				<NavLink to={"/admin"}>
					<LogoLivre />
				</NavLink>

				<div className={style.links}>
					<div className={style.navgroups}>
						{/* <NavLink to={"/admin/books"} onClick={closeMenu}> */}
						<p>livres</p>
						{/* </NavLink> */}
						<div className={style.navdetails}>
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
						<p>évènements</p>
						{/* </NavLink> */}
						<div className={style.navdetails}>
							<NavLink to={"/admin/books"} onClick={closeMenu}>
								<p>Gestion des évènements</p>
							</NavLink>
							<NavLink to={"/admin/books"} onClick={closeMenu}>
								<p>Inscriptions</p>
							</NavLink>
						</div>
					</div>

					<div className={style.navgroups}>
						<NavLink to={"/admin/"} onClick={closeMenu}>
							<p>newsletter</p>
						</NavLink>
						<div className={style.navdetails}></div>
					</div>
					<div className={style.navgroups}>
						<NavLink to={"/admin/"} onClick={closeMenu}>
							<p>utilisateur.ice.s</p>
						</NavLink>
						<div className={style.navdetails}></div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default DashboardNav;
