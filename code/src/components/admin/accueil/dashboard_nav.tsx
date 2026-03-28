"use client";
import { useState } from "react";
import { NavLink } from "react-router";
import style from "../../../assets/css/admin/dashboard.module.css";
import Arrow from "../../icones/arrow";
import LogoLivre from "../../icones/logo_livre";

const DashboardNav = () => {
	const [navDbMobileSIsVisible, setnavDbMobileSIsVisible] =
		useState<boolean>(false);

	const handleClic = () => {
		// modifier la valeur de l'état : utiliser obligatoirement le setter de l'état
		//  ! : négation, donc !navMobileSIsVisible : on va aller chercher la valeur contraire du boolean
		setnavDbMobileSIsVisible(!navDbMobileSIsVisible);
		// console.log(navDbMobileSIsVisible);
	};
	return (
		<>
			<div className={style.buttonarrow}>
				<button type="button" onClick={handleClic}>
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
						<NavLink to={"/admin/books"}>
							<p>livres</p>
						</NavLink>
						<div className={style.navdetails}>
							<NavLink to={"/admin/books"}>
								<p>Gestions des livres</p>
							</NavLink>
							<NavLink to={"/admin/books"}>
								<p>auteur.ice.s</p>
							</NavLink>
							<NavLink to={"/admin/books"}>
								<p>catégories</p>
							</NavLink>
							<NavLink to={"/admin/books"}>
								<p>états</p>
							</NavLink>
						</div>
					</div>
					<div className={style.navgroups}>
						<NavLink to={"/admin/"}>
							<p>évènements</p>
						</NavLink>
						<div className={style.navdetails}>
							<NavLink to={"/admin/books"}>
								<p>Gestion des évènements</p>
							</NavLink>
							<NavLink to={"/admin/books"}>
								<p>Inscriptions</p>
							</NavLink>
						</div>
					</div>

					<div className={style.navgroups}>
						<NavLink to={"/admin/"}>
							<p>newsletter</p>
						</NavLink>
						<div className={style.navdetails}>
							<div />
						</div>
						<div className={style.navgroups}>
							<NavLink to={"/admin/"}>
								<p>utilisateur.ice.s</p>
							</NavLink>
							<div className={style.navdetails}></div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default DashboardNav;
