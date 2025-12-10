import styles from "../assets/css/header.module.css";
import LogoDessin from "./logo_dessin";
import LogoTitre from "./logo_titre";
import MenuHamburger from "./menu_ham";
import Nav from "./navbar";

const Header = () => {
	return (
		<header>
			<LogoDessin />
			<LogoTitre />
			<MenuHamburger />
			<Nav />
		</header>
	);
};

export default Header;
