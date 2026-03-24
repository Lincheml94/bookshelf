import styles from "../../assets/css/header.module.css";
import Nav from "../nav/navbar";
import LogoDessin from "./logo_dessin";
import LogoTitre from "./logo_titre";

const Header = () => {
	return (
		<header>
			{/* <LogoDessin /> */}
			<LogoTitre />
			<Nav />
		</header>
	);
};

export default Header;
