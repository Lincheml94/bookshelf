import type { Dispatch, SetStateAction } from "react";
import type { Book } from "../../../../models/book";
import type { Category } from "../../../../models/category";

// reprendre strictement le nom des props définis

type FilterCategoriesProps = {
	categories: Category[];
	books: Book[];
	setselectedCategory: Dispatch<SetStateAction<string>>;
};

export type { FilterCategoriesProps };
