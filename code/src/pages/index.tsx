import Content from "../components/content_accueil";
import Seo from "../components/seo";

const HomePage = () => {
	return (
		<>
			<Seo title="Accueil" description="Accueil - desc" url="/" />
			<Content />
		</>
	);
};

export default HomePage;
