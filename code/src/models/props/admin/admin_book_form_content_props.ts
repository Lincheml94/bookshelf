import type { Category } from "../../../../models/category";
import type { Currentstate } from "../../../../models/currentstate";
import type { Author } from "../../../../models/author";
import type { Book } from "../../../../models/book";
import type { ZodError } from "zod";

type AdminBookFormContentProps = {
    categories: Category[];
    authors: Author[];
    currentstates: Currentstate[];
    validator: (data: Partial<Book>) => Promise<Partial<Book> | ZodError>;
    dataToUpdate: Book | undefined;
}

export type { AdminBookFormContentProps };