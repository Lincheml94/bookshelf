import Fondcatalogue from "../components/fond_catalogue";
import GalerieCatalogue from "../components/galerie_catalogue";
import Seo from "../models/props/seo";

const Catalogue = () => {
	return (
		<>
			<Seo title="Catalogue" description="Catalogue - desc" url="/catalogue" />
			<h2>Catalogue</h2>
			<Fondcatalogue />
			<GalerieCatalogue />
		</>
	);
};

export default Catalogue;
