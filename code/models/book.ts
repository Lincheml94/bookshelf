// reprendre strictement les noms des colonnes de la table SQL

import type { Author } from "./author";
import type { Category } from "./category";
import type { Currentstate } from "./currentstate";

type Book = {
	id: number;
	title: string;
	published_at: string;
	price: number;
	pages: string;
	dimensions: string;
	images: string;
	isbn: string;
	print: string;
	description: string;

	// liste concaténée des identifiants des catégories
	category_ids: string | string[];
	categories: Category[];
	// liste concaténée des identifiants des currentstates
	currentstate_ids: string | string[];
	currentstates: Currentstate[];
	// liste concaténée des identifiants des authors
	author_ids: string | string[];
	authors: Author[];
};

export type { Book };
