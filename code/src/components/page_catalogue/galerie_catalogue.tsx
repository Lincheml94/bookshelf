import { use } from "react";
import type { Book } from "../../../models/book";
import styles from "../../assets/css/galerie_catalogue.module.css";
import type { ApiResponse } from "../../models/api_response";
import BookApiService from "../../services/book_api_service";
import BookListItem from "./book_list_item";

const GalerieCatalogue = () => {
	/*
		use permet de récupérer les données d'une promesse dans un composant serveur de React
	*/
	const results = use<ApiResponse<Book[]>>(new BookApiService().selectAll());

	return (
		<div className={styles.flexall}>
			<div className={styles.flexcat}>
				{/* <div className={styles.cartelivre}> */}
				{results.data?.map((item) => (
					<BookListItem key={item.id} data={item} />
				))}
			</div>
		</div>
	);
};

export default GalerieCatalogue;
