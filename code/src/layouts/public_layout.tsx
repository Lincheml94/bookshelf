import { Outlet } from "react-router";
// import Content from "../components/content_accueil";
import Header from "../components/header";

const PublicLayout = () => {
	return (
		<>
			{/* uniquement des composants */}
			{/* lien d'évitement */}

			{/* header */}
			<Header />
			{/* footer */}
			{/* contenu de la page enfant : outlet */}
			<Outlet />
		</>
	);
};

export default PublicLayout;
