import { Outlet } from "react-router";
import style from "../assets/css/content.module.css";
import Header from "../components/header/header";
import LoginButton from "../components/login/login_button";

const PublicLayout = () => {
	return (
		<>
			{/* uniquement des composants */}
			{/* lien d'évitement */}
			<a href="#main-content" className={style.skipLink}>
				Aller au contenu principal
			</a>
			{/* header */}
			<Header />
			<LoginButton />
			{/* contenu de la page enfant : outlet */}
			{/* Cible du lien d'évitement */}
			<main id="main-content" className={style.container} tabIndex={-1}>
				<Outlet />
			</main>
		</>
	);
};

export default PublicLayout;
