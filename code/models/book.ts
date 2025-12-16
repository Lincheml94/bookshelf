// reprendre strictement les noms des colonnes de la table SQL

import type { Category } from "./category";

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
};

export type { Book };
