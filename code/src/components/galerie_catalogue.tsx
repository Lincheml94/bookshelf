import { use } from "react";
import styles from "../assets/css/galerie_catalogue.module.css";
import type { ApiResponse } from "../models/api_response";
import type { Book } from "../../models/book";
import BookApiService from "../services/book_api_service";
import BookListItem from "./book/book_list_item";

const GalerieCatalogue = () => {

/*
		use permet de récupérer les données d'une promesse dans un composant serveur de React
	*/
    const results = use<ApiResponse<Book[]>>(new BookApiService().selectAll());


	return (
		<div className={styles.flexall}>
			
			<div className={styles.flexcat}> 
				
				{/* <div className={styles.cartelivre}> */}
					{
                results.data?.map((item) => (
                    <BookListItem key={item.id} data={item}/>
            ))}
				{/* </div>
				
				
				*/}
				{/* <div className={styles.cartelivre}>
					<img
						src="/img/couverture-t3m_e3287579-247e-462d-a7d6-73d455deec2b.webp"
						alt=""
					/>
					<p></p>
				</div>
				<div className={styles.cartelivre}>
					<img src="/img/Capture d’écran 2025-12-09 150524.png" alt="" />
					<p></p>
				</div>
				<div className={styles.cartelivre}>
					<img src="/img/allison_dorothy.webp" alt="" />
					<p></p>
				</div>
			/* </div> */
			/* <div className={styles.flexcat}>
				<div className={styles.cartelivre}>
					<img src="/img/couverture-sabrina-calvo.webp" alt="" />
					<p></p>
				</div>
				<div className={styles.cartelivre}>
					<img
						src="/img/couverture-t3m_e3287579-247e-462d-a7d6-73d455deec2b.webp"
						alt=""
					/>
					<p></p>
				</div>
				<div className={styles.cartelivre}>
					<img src="/img/Capture d’écran 2025-12-09 150524.png" alt="" />
					<p></p>
				</div>
				<div className={styles.cartelivre}>
					<img src="/img/allison_dorothy.webp" alt="" />
					<p></p>
				</div> */}
			</div>
			{/* <div className={styles.flexcat}>
				<div className={styles.cartelivre}>
					<img src="/img/couverture-sabrina-calvo.webp" alt="" />
					<p></p>
				</div>
				<div className={styles.cartelivre}>
					<img
						src="/img/couverture-t3m_e3287579-247e-462d-a7d6-73d455deec2b.webp"
						alt=""
					/>
					<p></p>
				</div>
				<div className={styles.cartelivre}>
					<img src="/img/Capture d’écran 2025-12-09 150524.png" alt="" />
					<p></p>
				</div>
				<div className={styles.cartelivre}>
					<img src="/img/allison_dorothy.webp" alt="" />
					<p></p>
				</div>
			</div>
			<div className={styles.flexcat}>
				<div className={styles.cartelivre}>
					<img src="/img/couverture-sabrina-calvo.webp" alt="" />
					<p></p>
				</div>
				<div className={styles.cartelivre}>
					<img
						src="/img/couverture-t3m_e3287579-247e-462d-a7d6-73d455deec2b.webp"
						alt=""
					/>
					<p></p>
				</div>
				<div className={styles.cartelivre}>
					<img src="/img/Capture d’écran 2025-12-09 150524.png" alt="" />
					<p></p>
				</div>
				<div className={styles.cartelivre}>
					<img src="/img/allison_dorothy.webp" alt="" />
					<p></p>
				</div>
			</div> */}
		</div>
	);
};

export default GalerieCatalogue;
