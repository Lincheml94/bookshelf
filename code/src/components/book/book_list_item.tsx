import { Link } from "react-router";
import styles from "../../assets/css/galerie_catalogue.module.css";
import type { BookListItemProps } from "../../models/props/book_list_item_props";
// récupérer les props dans les paramètres


const BookListItem = ({data}: BookListItemProps) => {
    
    return (
        <div className={styles.cartelivre}>
            <Link to={ `/book/${data.id}` }>
					<img src={`/img${data.images}`} alt={data.title} />
                    <p>{data.title}</p>
                    
                        <ul>
                            {/* boucler sur les auteurs */}
                            {
                                data.authors.map((item) => (
                                    <li key={item.id}>{item.firstname} {item.lastname}</li>))
                            }
            </ul>
                <p>prix : {data.price}€</p>
                </Link>
				</div >
            )
  
};

export default BookListItem;