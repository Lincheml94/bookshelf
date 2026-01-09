import z from "zod";
import type { Book } from "../../models/book";


class AdminBookFormValidator{

    // validation des données du formulaire
    public validate = async (data: Partial<Book>): Promise<Partial<Book> | ZodError> => {
        // la méthode doit être exécutée côté serveur
        "use server";
        
        // contraintes de validation
        const constraints = z.object({
            id: z.union([
                z.string().nullable(),
                // coerce : transtyper
                z.coerce
                    .number()
                    .positive(),
            ]),
            title: z.string("Le titre est obligatoire"),
            published_at: z.date("La date est obligatoire"),
	        price: z.number("le prix est obligatoire"),
            pages: z
                .string("le nombre de pages est obligatoire")
                .max(20, "le nombre de caractère est limité à 20"),
            dimensions: z
                .string("la dimension est obligatoire")
                .max(20, "le nombre de caractère est limité à 20"),
	        images: z.string("ce champ est obligatoire"),
            isbn: z
                .string("l'isbn est obligatoire")
                .max(40, "le nombre de caractères est limité à 40"),

            print: z
                .string("ce champ est obligatoire")
                .max(100, "le nombre de caractères est limité à 100"),
            category_ids: z
                .string("ce champ est obligatoire")
                .min(1, "veuillez cocher au moins une case")
        });
        
        // validation de la saisie du formmulaire
        const validation = await constraints.safeParseAsync(data);
            
            
    };

}

export default AdminBookFormValidator;