import type { Book } from "../../../../models/book";

// reprendre strictement le nom des props définis

type GalerieCatalogueProps = {
	books: Book[];
};

export type { GalerieCatalogueProps };
