"use client";
import { useState } from "react";
import style from "../../assets/css/filternav.module.css";

const FilterBar = () => {
	const [filtreIsVisible, setfiltreIsVisible] = useState<boolean>(false);

	// gestionnaire d'évènement

	const handleClic = () => {
		// modifier la valeur de l'état : utiliser obligatoirement le setter de l'état
		//  ! : négation, donc !filtreIsVisible : on va aller chercher la valeur contraire du boolean
		setfiltreIsVisible(!filtreIsVisible);
		console.log(filtreIsVisible);
		console.log("clic");
	};
	return (
		<>
			<div className={style["filter-nav-principale"]}>
				<button type="button" onClick={handleClic}>
					<p>filtres</p>
				</button>
			</div>
			<div
				className={`${style["filter-nav"]} ${filtreIsVisible ? style["filter-invisible"] : ""}`}
			>
				<div className={style["filter-nav-categories"]}>
					<h3>Catégories</h3>
					<ul>
						<li>roman</li>
						<li>poésie</li>
						<li>roman graphique</li>
						<li>essai</li>
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
