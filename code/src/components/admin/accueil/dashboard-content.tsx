import style from "../../../assets/css/admin/dashboard.module.css";

const DashboardContent = () => {
	return (
		<div className={style["content-dashboard-accueil"]}>
			<div className={style.msg}>
				<p>Bienvenue dans votre espace personnel !</p>
				<p>ici pour pourrez gérer le contenu de votre site</p>
			</div>
			<div className={style.subcontent}>
				<div className={`${style.stat} ${style.un}`}>
					<h2>33 livres</h2>
				</div>
				<div className={`${style.stat} ${style.deux}`}>
					<h2>31 auteur.ice.s</h2>
				</div>
				<div className={`${style.stat} ${style.deux}`}>
					<h2>11 évènement</h2>
				</div>
			</div>
		</div>
	);
};

export default DashboardContent;
