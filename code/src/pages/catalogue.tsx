
import Fondcatalogue from "../components/fonds/fond_catalogue";
import GalerieCatalogue from "../components/page_catalogue/galerie_catalogue";
import Seo from "../models/props//seo/seo";

const Catalogue = () => {
	

	

	return <>
		<Seo title="Catalogue" description="Catalogue - desc" url="/catalogue" />
		<Fondcatalogue /> 
	    <GalerieCatalogue />
	</>
	;
};

export default Catalogue;
