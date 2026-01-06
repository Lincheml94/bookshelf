import Content from "../components/content_accueil";
import Fond from "../components/fond";
import Seo from "../models/props/seo";

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
