import Content from "../components/accueil/content_accueil";
import Fond from "../components/fonds/fond";
import Seo from "../models/props/seo/seo";

const HomePage = () => {
	return (
		<>
			<Seo title="Accueil" description="Accueil - desc" url="/" />
			<Fond />
			<Content />
		</>
	);
};

export default HomePage;
