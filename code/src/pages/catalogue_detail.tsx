import Seo from "../models/props//seo/seo";
import type { CatalogueDetailsParams } from "../models/params/catalogue_details_params"
import { use } from "react";
import BookApiService from "../services/book_api_service";
import type { Book } from "../../models/book";
import BookContentDetails from "../components/page_catalogue/book_content_details";
// param permet de récupérer une variable d'URL

const CatalogueDetail = ({ params }: CatalogueDetailsParams) => {
	// récupérer l'identifiant dans les paramètres
	// deconstruction d'un objet permet de créer des variables pour chaque propriété d'un objet
	const { id } = params;
	// récupérer les données
	const result = use(new BookApiService().selectOne(id));
	console.log(result);
	return <>
		<Seo title={result.data?.title as string} description={result.data?.title as string} url={`/book/${id}`} />
		
			<BookContentDetails data={result.data as Book} />
			
	</>
	;
};

export default CatalogueDetail;
