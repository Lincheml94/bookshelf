import { use } from "react";
import type { Author } from "../../models/author";
import type { Book } from "../../models/book";
import type { Category } from "../../models/category";
import Fondcatalogue from "../components/fonds/fond_catalogue";
import CatalogueContent from "../components/page_catalogue/catalogue_content";
import Seo from "../models/props//seo/seo";
import AuthorApiService from "../services/authors_api_service";
import BookApiService from "../services/book_api_service";
import CategoryApiService from "../services/category_api_service";

const Catalogue = () => {
	const categories = use(new CategoryApiService().selectAll())
		.data as Category[];
	const books = use(new BookApiService().selectAll()).data as Book[];
	const authors = use(new AuthorApiService().selectAll()).data as Author[];
	return (
		<>
			<Seo title="Catalogue" description="Catalogue - desc" url="/catalogue" />
			<Fondcatalogue />
			<CatalogueContent
				categories={categories}
				books={books}
				authors={authors}
			/>
		</>
	);
};

export default Catalogue;
