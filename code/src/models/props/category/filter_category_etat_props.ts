import type { Dispatch, SetStateAction } from "react";
import type { Book } from "../../../../models/book";
import type { Category } from "../../../../models/category";

// reprendre strictement le nom des props définis

type FilterCategoriesStateProps = {
	categories: Category[];
	books: Book[];
	selectedCategory: Dispatch<SetStateAction<string>>;
};

export type { FilterCategoriesStateProps };
