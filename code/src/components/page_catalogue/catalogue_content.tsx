"use client";
import { useState } from "react";
import type { FilterCategoriesProps } from "../../models/props/category/filter_category_props";
import FilterBar from "./filternav";
import GalerieCatalogue from "./galerie_catalogue";

const CatalogueContent = ({ categories, books }: FilterCategoriesProps) => {
	// const categories = use(new CategoryApiService().selectAll())
	// 	.data as Category[];
	// const books = use(new BookApiService().selectAll()).data as Book[];
	// console.log(categories, books);
	// Clic : filtre
	const [selectedCategory, setselectedCategory] = useState<string>("");

	// 2. LOGIQUE DE FILTRE
	// On crée une nouvelle liste : si une catégorie est choisie, on filtre, sinon on garde tout.
	const filteredBooks =
		selectedCategory === ""
			? books
			: books.filter((book) =>
					// On vérifie si le tableau 'categories' du livre contient
					// une catégorie dont le nom correspond à selectedCategory
					book.categories.some((cat) => cat.name === selectedCategory),
				);

	return (
		<>
			{/* <p>selectedCategory :{selectedCategory}</p> */}
			<FilterBar
				categories={categories}
				setselectedCategory={setselectedCategory}
				books={books} // Requis par ton type FilterCategoriesProps
			/>
			<GalerieCatalogue books={filteredBooks} />
		</>
	);
};
export default CatalogueContent;
