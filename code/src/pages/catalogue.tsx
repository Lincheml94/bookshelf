
import Fondcatalogue from "../components/fond_catalogue";
import GalerieCatalogue from "../components/galerie_catalogue";
import Seo from "../models/props/seo";

const Catalogue = () => {
	

	

	return <>
		<Seo title="Catalogue" description="Catalogue - desc" url="/catalogue" />
		<Fondcatalogue /> 
	    <GalerieCatalogue />
	</>
	;
};

export default Catalogue;
