// reprendre strictement les noms des colonnes de la table SQL
import type { Book } from "./book";

type Events = {
	id: number;
	title: string;
	description: string;
	IsComplete: boolean;
	// book_id: number;

	book_id: number;
	book: Book;
};

export type { Events };
