import type { ZodError } from "zod";
import type { Author } from "../../../../models/author";
import type { Book } from "../../../../models/book";
import type { Category } from "../../../../models/category";
import type { Currentstate } from "../../../../models/currentstate";

type AdminBookFormContentProps = {
	categories: Category[];
	authors: Author[];
	currentstates: Currentstate[];
	validator: (data: Partial<Book>) => Promise<Partial<Book> | ZodError>;
	dataToUpdate: Book | undefined;
};

export type { AdminBookFormContentProps };
