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
	const [selectedCategory, setselectedCategory] = useState(false);

	return (
		<>
			{/* <p>selectedCategory :{selectedCategory}</p> */}
			<FilterBar categories={categories} selectedCategory={selectedCategory} />
			<GalerieCatalogue books={books} />
		</>
	);
};
export default CatalogueContent;
