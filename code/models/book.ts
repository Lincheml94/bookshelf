// reprendre strictement les noms des colonnes de la table SQL

import type { Author } from "./author";
import type { Category } from "./category";
import type { Currentstate } from "./currentstate";

type Book = {
	id: number;
	title: string;
	published_at: Date;
	price: number;
	pages: string;
	dimensions: string;
	images: string;
	isbn: string;
	print: string;

	// liste concaténée des identifiants des catégories
	category_ids: string;
	categories: Category[];
	// liste concaténée des identifiants des currentstates
	currentstate_ids: string;
	currentstates: Currentstate[];
	// liste concaténée des identifiants des authors
	author_ids: string;
	authors: Author[];
};

export type { Book };
