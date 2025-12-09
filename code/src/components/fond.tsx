import styles from "../assets/css/fond.module.css";

const Fond = () => {
	return (
		<div className={styles.fond}>
			<div className={styles.bande_un}></div>
			<div className={styles.bande_deux}></div>
			<div className={styles.bande_trois}></div>
			<div className={styles.bande_quatre}></div>
			<div className={styles.bande_cinq}></div>
			<div className={styles.bande_six}></div>
		</div>
	);
};

export default Fond;
