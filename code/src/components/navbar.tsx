// "use client";
"use client";
import { useState } from "react";
import { NavLink } from "react-router";
import styles from "../assets/css/navbar.module.css";

// import MenuHamburger from "./menu_ham";

const Nav = () => {
	// créer un état : hook use State
	// const navMobileIsVisible:boolean = false;
	const [navMobileSIsVisible, setnavMobileSIsVisible] =
		useState<boolean>(false);

	// gestionnaire d'évènement

	const handleClic = () => {
		// modifier la valeur de l'état : utiliser obligatoirement le setter de l'état
		//  ! : négation, donc !navMobileSIsVisible : on va aller chercher la valeur contraire du boolean
		setnavMobileSIsVisible(!navMobileSIsVisible);
		console.log(navMobileSIsVisible);
	};

	return (
		<div className={styles.navbar}>
			<button type="button" onClick={handleClic}>
				<img
					className={styles.menuham}
					src="/img/icons8-menu-50.png"
					alt="button"
				/>
			</button>
			<nav
				className={`${styles.menu} ${navMobileSIsVisible ? styles["navbar-mobile-visible"] : ""}`}
			>
				<NavLink to={"/catalogue"}>Catalogue</NavLink>
				<NavLink to={"/agenda"}>Agenda</NavLink>
				<NavLink to={"/info"}>Info</NavLink>
			</nav>
		</div>
	);
};

export default Nav;

// import { NavLink } from "react-router";
// import styles from "../assets/css/navbar.module.css";

// const Nav = () => {
// 	return (
// 		<nav>
// 			<NavLink to={"/catalogue"}>
// 				Catalogue
// 			</NavLink>
// 			<NavLink to={"/agenda"}>
// 				Agenda
// 			</NavLink>
// 			<NavLink to={"/info"}>
// 				Info
// 			</NavLink>
