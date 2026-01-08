import { Outlet } from "react-router";
// import Content from "../components/content_accueil";
import Header from "../components/header/header";
import LoginButton from "../components/admin/login_button";

const PublicLayout = () => {
	return (
		<>
			{/* uniquement des composants */}
			{/* lien d'évitement */}

			{/* header */}
			<Header />
			<LoginButton />
			{/* footer */}
			{/* contenu de la page enfant : outlet */}
			<Outlet />
		</>
	);
};

export default PublicLayout;
