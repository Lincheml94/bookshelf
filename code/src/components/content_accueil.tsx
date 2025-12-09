import styles from "../assets/css/content.module.css";

const Content = () => {
	return (
		<div className={styles.contenu_accueil}>
			<div className={styles.nouveautés}>
				<h2>Nouveautés</h2>
				<img src="/img/couverture-sabrina-calvo.webp" alt="" />
				<img src="/img/Capture d’écran 2025-12-09 150524.png" alt="" />
			</div>
			<div className={styles.actuellement}>
				<h2>A venir</h2>
				<div className={styles.event_accueil}></div>
			</div>
		</div>
	);
};

export default Content;
