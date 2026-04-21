"use client";
import { useState } from "react";
import type { FilterCategoriesProps } from "../../models/props/category/filter_category_props";
import FilterBar from "./filternav";
import GalerieCatalogue from "./galerie_catalogue";

// const CatalogueContent = ({
// 	categories,
// 	books,
// 	authors,
// }: FilterCategoriesProps) => {
// 	// const categories = use(new CategoryApiService().selectAll())
// 	// 	.data as Category[];
// 	// const books = use(new BookApiService().selectAll()).data as Book[];
// 	// console.log(categories, books);
// 	// Clic : filtre
// 	const [selectedCategory, setselectedCategory] = useState<string>("");
// 	const [selectedAuthor, setselectedAuthor] = useState<string>("");

// 	// 2. LOGIQUE DE FILTRE
// 	// On crée une nouvelle liste : si une catégorie est choisie, on filtre, sinon on garde tout.
// 	const filteredBooks = books.filter((book) => {
// 		// Vérification de la catégorie :
// 		// Si selectedCategory est vide, on laisse passer (true).
// 		// Sinon, on vérifie si le livre possède cette catégorie dans son tableau.
// 		const matchCategory =
// 			selectedCategory === "" ||
// 			book.categories.some((cat) => cat.name === selectedCategory);

// 		// Vérification de l'auteur :
// 		// On compare la chaîne cliquée (ex: "Victor Hugo") avec le nom complet construit.
// 		const matchAuthor =
// 			selectedAuthor === "" ||
// 			book.authors.some(
// 				(auth) => `${auth.firstname} ${auth.lastname}` === selectedAuthor,
// 			);

// 		// Le livre est gardé UNIQUEMENT si les deux conditions sont vraies
// 		return matchCategory && matchAuthor;
// 	});

// 	return (
// 		<>
// 			<FilterBar
// 				categories={categories}
// 				setselectedCategory={setselectedCategory}
// 				books={books}
// 				setselectedAuthor={setselectedAuthor}
// 				authors={authors}
// 			/>
// 			<GalerieCatalogue books={filteredBooks} />
// 		</>
// 	);
// };
const CatalogueContent = ({
	categories,
	authors,
	books,
}: FilterCategoriesProps) => {
	const [selectedCategory, setselectedCategory] = useState<string>("");
	const [selectedAuthor, setselectedAuthor] = useState<string>("");

	const filteredBooks =
		books?.filter((book) => {
			// Logique Catégorie : On compare le NOM (ou l'ID si tu préfères)
			const matchCat =
				selectedCategory === "" ||
				book.categories?.some((cat) => cat.name === selectedCategory);

			// Logique Auteur
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
			/>

			{/* Comme ton ami, on gère le cas où il n'y a pas de résultat */}
			{filteredBooks.length > 0 ? (
				<GalerieCatalogue books={filteredBooks} />
			) : (
				<div>
					<p>Désolé, aucun livre ne correspond à vos critères.</p>
				</div>
			)}
		</>
	);
};
export default CatalogueContent;
