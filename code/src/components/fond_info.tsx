import styles from "../assets/css/fond.module.css";

const FondInfo = () => {
	return (
		<div className={styles.fondinfo}>
			<div className={styles.bande_un_info}></div>
			<div className={styles.bande_deux_info}></div>
			<div className={styles.bande_trois_info}></div>
			<div className={styles.bande_quatre_info}></div>
			<div className={styles.bande_cinq_info}></div>
			<div className={styles.bande_six_info}></div>
		</div>
	);
};

export default FondInfo;
