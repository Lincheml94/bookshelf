import { Outlet } from "react-router";
import style from "../assets/css/content.module.css";
import Footer from "../components/footer";
import Header from "../components/header/header";
import LoginButton from "../components/login/login_button";

const PublicLayout = () => {
	return (
		<>
			{/* uniquement des composants */}
			{/* lien d'évitement */}

			{/* header */}
			<Header />
			<LoginButton />
			{/* contenu de la page enfant : outlet */}
			<div className={style.container}>
				<Outlet />
				{/* <Footer /> */}
			</div>
		</>
	);
};

export default PublicLayout;
