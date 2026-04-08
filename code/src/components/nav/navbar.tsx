"use client";
import { useState } from "react";
import { FaUniversalAccess } from "react-icons/fa6";
import { NavLink } from "react-router";
import styles from "../../assets/css/navbar.module.css";
import IconStripes from "../icones/icon_stripes";

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
		// console.log(navMobileSIsVisible);
	};

	return (
		<div className={styles.navbar}>
			<button
				className={styles.hamburger}
				type="button"
				onClick={handleClic}
				aria-expanded={navMobileSIsVisible}
				aria-label="Menu de navigation"
			>
				<img
					className={styles.menuham}
					src="/img/icones/icons8-menu-50.png"
					alt="button"
				/>
			</button>
			<nav
				id="main-nav"
				className={`${styles.menu} ${navMobileSIsVisible ? styles["navbar-mobile-visible"] : ""}`}
				aria-label="Navigation principale"
			>
				<div className={styles.navlinks}>
					<NavLink to={"/catalogue"}>Catalogue</NavLink>
					<NavLink to={"/agenda"}>Agenda</NavLink>
					<NavLink to={"/info"}>Info</NavLink>
					<NavLink to={"/contact"}>Contact</NavLink>
				</div>
				<div className={styles.navlinks}>
					{/* <FaUniversalAccess /> */}
					{/* <IconStripes /> */}
				</div>
			</nav>
		</div>
	);
};

export default Nav;
