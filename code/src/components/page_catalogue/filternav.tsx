"use client";
import { type MouseEvent, useState } from "react";
import style from "../../assets/css/filternav.module.css";
import type { FilterCategoriesProps } from "../../models/props/category/filter_category_props";

const FilterBar = ({
	categories,
	setselectedCategory,
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

	const FilterClic = (e: MouseEvent) => {
		const selectedcategory = e.currentTarget.innerHTML;

		setselectedCategory(selectedcategory);

		console.log(selectedcategory);
	};

	return (
		<>
			<div className={style["filter-nav-principale"]}>
				<button type="button" onClick={handleClic}>
					<p>filtres</p>
				</button>
			</div>
			<div
				className={`${style["filter-nav"]} ${filtreIsVisible ? style["filter-visible"] : ""}`}
			>
				<div className={style["filter-nav-categories"]}>
					<h3>Catégories</h3>
					<ul>
						{categories.map((item) => (
							<li key={item.id} onClick={FilterClic}>
								{item.name}
							</li>
						))}
					</ul>
				</div>
				<div className={style["filter-nav-auteurs"]}>
					<h3>Auteurs</h3>
					<ul className={style["auteur-name"]}>
						<li>Marguerite Duras</li>
						<li>Dorothy Allison</li>
						<li>Victor Hugo</li>
						<li>Alain Guiraudie</li>
						<li>Alain Guiraudie</li>
						<li>Alain Guiraudie</li>
						<li>Marguerite Duras</li>
						<li>Dorothy Allison</li>
						<li>Victor Hugo</li>
						<li>Alain Guiraudie</li>
						<li>Alain Guiraudie</li>
						<li>Alain Guiraudie</li>
						<li>Marguerite Duras</li>
						<li>Dorothy Allison</li>
						<li>Victor Hugo</li>
						<li>Alain Guiraudie</li>
						<li>Alain Guiraudie</li>
						<li>Alain Guiraudie</li>
						<li>Marguerite Duras</li>
						<li>Dorothy Allison</li>
					</ul>
				</div>
			</div>
		</>
	);
};
export default FilterBar;
