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
		console.log(navDbMobileSIsVisible);
	};
	return (
		<>
			<div className={style.buttonarrow}>
				<button type="button" onClick={handleClic}>
					<Arrow />
				</button>
			</div>
			<nav
				className={`${style["navbar-dashboard-mobile-visible"]} ${navDbMobileSIsVisible ? style.dashboardnav : ""}`}
			>
				<NavLink to={"/admin"}>
					<LogoLivre />
				</NavLink>

				<div className={style.links}>
					<NavLink to={"/admin/books"}>
						<p>livres</p>
					</NavLink>
					<NavLink to={"/admin/"}>
						<p>évènements</p>
					</NavLink>
					<NavLink to={"/admin/"}>
						<p>newsletter</p>
					</NavLink>
					<NavLink to={"/admin/"}>
						<p>utilisateur.ice.s</p>
					</NavLink>
				</div>
			</nav>
		</>
	);
};

export default DashboardNav;
