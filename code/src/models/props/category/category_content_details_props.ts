import type { Book } from "../../../../models/book";
import type { Category } from "../../../../models/category";

type CategoryContentDetailsProps = {
	data: Category;
	books: Book[];
};

export type { CategoryContentDetailsProps };
