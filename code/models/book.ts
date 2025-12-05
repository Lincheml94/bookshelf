// reprendre strictement les noms des colonnes de la table SQL

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
};

export type { Book };
