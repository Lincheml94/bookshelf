import styles from "../../assets/css/header.module.css";
import LogoDessin from "./logo_dessin";
import LogoTitre from "./logo_titre";
import Nav from "../nav/navbar";

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
