import type { Book } from "../../../models/book"

// reprendre strictement le nom des props définis 

type BookListItemProps = {
    data: Book;
};

export type {BookListItemProps};