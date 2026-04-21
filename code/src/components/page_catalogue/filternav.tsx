"use client";
import { type MouseEvent, useState } from "react";
import style from "../../assets/css/filternav.module.css";
import type { FilterCategoriesProps } from "../../models/props/category/filter_category_props";

const FilterBar = ({
	categories,
	authors,
	setselectedCategory,
	setselectedAuthor,
	selectedCategory,
	selectedAuthor,
}: FilterCategoriesProps) => {
	const [filtreIsVisible, setfiltreIsVisible] = useState<boolean>(false);

	// gestionnaire d'évènement
	//  Clic : Nav déroulante
	const handleClic = () => {
		// modifier la valeur de l'état : utiliser obligatoirement le setter de l'état
		//  ! : négation, donc !filtreIsVisible : on va aller chercher la valeur contraire du boolean
		setfiltreIsVisible(!filtreIsVisible);
		// console.log(filtreIsVisible);
		// console.log("clic");
	};

	const FilterClicCategory = (e: MouseEvent) => {
		// 1. On vide l'auteur pour ne pas cumuler les deux filtres
		setselectedAuthor("");

		// 2. On récupère le nom de la catégorie cliquée
		const selectedcategory = e.currentTarget.textContent?.trim() || "";
		setselectedCategory(selectedcategory);
		setfiltreIsVisible(false);
	};

	const FilterClicAuthor = (e: MouseEvent) => {
		// 1. On vide la catégorie pour ne pas cumuler les deux filtres
		setselectedCategory("");

		// 2. On récupère le nom de l'auteur cliqué
		const selectedauthor = e.currentTarget.textContent?.trim() || "";
		setselectedAuthor(selectedauthor);
		setfiltreIsVisible(false);
	};

	const handleReset = () => {
		setselectedCategory("");
		setselectedAuthor("");
	};

	return (
		<>
			<div className={style["filter-nav-principale"]}>
				<button type="button" onClick={handleClic}>
					<p>filtres</p>
				</button>
				{(selectedCategory !== "" || selectedAuthor !== "") && (
					<button type="button" onClick={handleReset}>
						<p>Réinitialiser</p>
					</button>
				)}
			</div>
			<div
				className={`${style["filter-nav"]} ${filtreIsVisible ? style["filter-visible"] : ""}`}
			>
				<div className={style["filter-nav-categories"]}>
					<h3>Catégories</h3>
					<ul>
						{categories.map((item) => (
							<li key={item.id} onClick={FilterClicCategory}>
								{item.name}
							</li>
						))}
					</ul>
				</div>
				<div className={style["filter-nav-auteurs"]}>
					<h3>Auteurs</h3>
					<ul className={style["auteur-name"]}>
						{authors?.map((item) => (
							<li key={item.id} onClick={FilterClicAuthor}>
								{item.firstname} {item.lastname}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};
export default FilterBar;
