import { use } from "react";
import { Link } from "react-router";
import style from "../../../assets/css/formulaire_crud.module.css";
import BookApiService from "../../../services/book_api_service";
import EditIcon from "../../icones/edit";
import BinIcon from "../../icones/trash";

const AdminBookHomeContent = () => {
	// récupération des menus
	const results = use(new BookApiService().selectAll()).data;

	return (
		<>
			<Link to={"/admin/book_form"}>
				<button type="submit" className={style.button_add}>
					Ajouter un livre
				</button>
			</Link>
			{/* Affichage des livres */}
			{results?.map((item) => {
				return (
					<div className={style.book_crud} key={item.id}>
						<p>{item.title}</p>

						<Link to={`/admin/book_form/${item.id}`}>
							<button type="submit" className={style.button_crud}>
								<EditIcon />
							</button>
						</Link>

						<Link to={`/admin/book_delete/${item.id}`}>
							<button type="submit" className={style.button_crud}>
								<BinIcon />
							</button>
						</Link>
					</div>
				);
			})}
		</>
	);
};

export default AdminBookHomeContent;
