import styles from "../../assets/css/content.module.css";
import CarteEventAccueil from "./carte_event_accueil";

const Content = () => {
	return (
		<div className={styles.contenu_accueil}>
			<div className={styles.nouveautés}>
				<h2>Nouveautés</h2>
				<img src="/img/book/couverture-sabrina-calvo.webp" alt="" />
				<img src="/img/book/Capture d’écran 2025-12-09 150524.png" alt="" />
			</div>
			<div className={styles.actuellement}>
				<h2>A venir</h2>
				<CarteEventAccueil />
			</div>
		</div>
	);
};

export default Content;
