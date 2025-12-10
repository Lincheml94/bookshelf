"use client";

import { useState } from "react";
import { NavLink } from "react-router";
import styles from "../assets/css/navbar.module.css";

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
		<nav>
			<div className={styles.navbar}>
				<nav
					className={`${styles.menu} ${navMobileSIsVisible ? styles["navbar-mobile-visible"] : ""}`}
				></nav>
				<NavLink to={"/catalogue"} className={styles.catalogue}>
					Catalogue
				</NavLink>
				<NavLink to={"/agenda"} className={styles.agenda}>
					Agenda
				</NavLink>
				<NavLink to={"/info"} className={styles.info}>
					Info
				</NavLink>
				<button type="button" onClick={handleClic}>
					<img
						className={styles.menuham}
						src="/img/icons8-menu-50.png"
						alt=""
					/>
				</button>
			</div>
		</nav>
	);
};

export default Nav;
