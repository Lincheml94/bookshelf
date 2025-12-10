// "use client";

import { NavLink } from "react-router";
import styles from "../assets/css/navbar.module.css";

const Nav = () => {
	return (
		<nav>
			<NavLink to={"/catalogue"} className={styles.catalogue}>
				Catalogue
			</NavLink>
			<NavLink to={"/agenda"} className={styles.agenda}>
				Agenda
			</NavLink>
			<NavLink to={"/info"} className={styles.info}>
				Info
			</NavLink>
		</nav>
		// évènement clic
	);
};

export default Nav;
