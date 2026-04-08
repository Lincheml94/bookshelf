import styles from "../../assets/css/header.module.css";
import LogoPrincipal from "../icones/logo_principal";
import Nav from "../nav/navbar";
import LogoDessin from "./logo_dessin";
import LogoTitre from "./logo_titre";

const Header = () => {
	return (
		<header>
			<LogoTitre />
			<Nav />
		</header>
	);
};

export default Header;
