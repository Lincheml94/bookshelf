"use client";
import { useState } from "react";
import style from "../../assets/css/filternav.module.css";
import type { FilterCategoriesProps } from "../../models/props/category/filter_category_props";
import FilterBar from "./filternav";
import GalerieCatalogue from "./galerie_catalogue";

const CatalogueContent = ({
	categories,
	authors,
	books,
}: FilterCategoriesProps) => {
	const [selectedCategory, setselectedCategory] = useState<string>("");
	const [selectedAuthor, setselectedAuthor] = useState<string>("");

	const filteredBooks =
		books?.filter((book) => {
			const matchCat =
				selectedCategory === "" ||
				book.categories?.some((cat) => cat.name === selectedCategory);

			const matchAuth =
				selectedAuthor === "" ||
				book.authors?.some(
					(auth) => `${auth.firstname} ${auth.lastname}` === selectedAuthor,
				);

			return matchCat && matchAuth;
		}) ?? []; // Si books est undefined, on retourne un tableau vide

	return (
		<>
			<FilterBar
				categories={categories}
				authors={authors}
				setselectedCategory={setselectedCategory}
				setselectedAuthor={setselectedAuthor}
				books={books}
				selectedCategory={selectedCategory}
				selectedAuthor={selectedAuthor}
			/>

			{/* Comme ton ami, on gère le cas où il n'y a pas de résultat */}
			{filteredBooks.length > 0 ? (
				<GalerieCatalogue books={filteredBooks} />
			) : (
				<div className={style.msg_erreur_filtre}>
					<p>Désolé, aucun livre ne correspond à vos critères.</p>
				</div>
			)}
		</>
	);
};
export default CatalogueContent;
