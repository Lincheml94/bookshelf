import Fondcatalogue from "../components/fonds/fond_catalogue";
import FilterBar from "../components/page_catalogue/filternav";
import GalerieCatalogue from "../components/page_catalogue/galerie_catalogue";
import Seo from "../models/props//seo/seo";

const Catalogue = () => {
	return (
		<>
			<Seo title="Catalogue" description="Catalogue - desc" url="/catalogue" />
			<Fondcatalogue />
			<FilterBar />
			<GalerieCatalogue />
		</>
	);
};

export default Catalogue;
