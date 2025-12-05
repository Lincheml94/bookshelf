// reprendre strictement les noms des colonnes de la table SQL

type Event = {
	id: number;
	title: string;
	description: string;
	IsComplete: boolean;
	book_id: number;
};

export type { Event };
