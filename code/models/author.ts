// reprendre strictement les noms des colonnes de la table SQL
import type { Book } from "./book";

type Author = {
	id: number;
	firstname: string;
	lastname: string;
	bio: string;

	book_ids: string;
	books: Book[];
};

export type { Author };
