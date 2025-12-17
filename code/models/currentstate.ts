// reprendre strictement les noms des colonnes de la table SQL
import type { Book } from "./book";

type Currentstate = {
	id: number;
	statename: string;

	book_ids: string;
	books: Book[];
};

export type { Currentstate };
