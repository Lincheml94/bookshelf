import { NavLink } from "react-router";
import styles from "../../assets/css/content.module.css";

const CarteEventAccueil = () => {
	return (
		<div className={styles.event_accueil}>
			<p>Séance dedicace Heloise Brezillon</p>
			<p>Librairie les mots à la bouche</p>
			<p>17.01.26</p>
			<NavLink to={"/agenda"}>Réserver</NavLink>
		</div>
	);
};

export default CarteEventAccueil;
