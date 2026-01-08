import styles from "../../assets/css/fond.module.css";

const FondAgenda = () => {
	return (
		<div className={styles.fondagenda}>
			<div className={styles.bande_un_agenda}></div>
			<div className={styles.bande_deux_agenda}></div>
			<div className={styles.bande_trois_agenda}></div>
			<div className={styles.bande_quatre_agenda}></div>
			<div className={styles.bande_cinq_agenda}></div>
			<div className={styles.bande_six_agenda}></div>
		</div>
	);
};

export default FondAgenda;