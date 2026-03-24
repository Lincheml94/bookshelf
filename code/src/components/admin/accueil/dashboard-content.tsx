import { use } from "react";
import style from "../../../assets/css/admin/dashboard.module.css";
import BookApiService from "../../../services/book_api_service";

const DashboardContent = () => {
	const results = use(new BookApiService().selectAll()).data;

	return (
		<div className={style["content-dashboard-accueil"]}>
			<div className={style.msg}>
				<p>Bienvenue dans votre espace personnel !</p>
				<p>ici pour pourrez gérer le contenu de votre site</p>
			</div>

			{results?.map((item) => {
				return (
					<div className={style.subcontent} key={item.id}>
						<div className={`${style.stat} ${style.un}`}>
							<h2>{item.title.length} livres</h2>
						</div>
						<div className={`${style.stat} ${style.deux}`}>
							{item.authors.map((item) => (
								<h2 key={item.id}>{item.id} auteur.ice.s</h2>
							))}
						</div>
						<div className={`${style.stat} ${style.deux}`}>
							<h2>11 évènement</h2>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default DashboardContent;
