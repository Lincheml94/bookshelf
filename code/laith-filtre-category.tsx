import type { CategoryContentDetailsProps } from "/app/src/models/props/category/category_content_details_props";
import style from "../../assets/css/tendances.module.css";
import BookListItem from "./src/components/page_catalogue/book_list_item";

const CategoriesDetailsContent = ({
	data,
	books,
}: CategoryContentDetailsProps) => {
	// Filtrage des jeux pour cette catégorie uniquement
	const filteredBooks = books?.filter((book: any) => {
		const bookCatId = book.category_id ?? book.category?.id;
		return bookCatId === data.id;
	});
	return (
		<article>
			<header>
				<h2>{data.name}</h2>
			</header>
			<section className={style["main_cards"]}>
				<div className={style.cards}>
					{filteredBooks.length > 0 ? (
						filteredBooks.map((item) => (
							<BookListItem key={item.id} data={item} />
						))
					) : (
						<p>Aucun livre disponible dans la catégorie "{data.name}".</p>
					)}
				</div>
			</section>
		</article>
	);
};

export default CategoriesDetailsContent;
