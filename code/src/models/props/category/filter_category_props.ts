import type { Dispatch, SetStateAction } from "react";
import type { Author } from "../../../../models/author";
import type { Book } from "../../../../models/book";
import type { Category } from "../../../../models/category";

// reprendre strictement le nom des props définis

type FilterCategoriesProps = {
	categories: Category[];
	authors: Author[];
	books: Book[];
	setselectedCategory: Dispatch<SetStateAction<string>>;
	setselectedAuthor: Dispatch<SetStateAction<string>>;
};

export type { FilterCategoriesProps };
