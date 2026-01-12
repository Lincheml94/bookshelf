
import type { Book } from "../../models/book";
import { type ZodError, z } from "zod";

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
            title: z
                .string("Le titre est obligatoire")
                .max(100, "un titre doit comporter au maximum 100 caractères"),
            
             published_at: z
                .iso.date("La date est obligatoire"),
                
            price: z.coerce.number()
                .min(1, "le prix doit être de minimum 1 euro")
                .max(999.99, "le prix doit être de maximum 999,99 euros"),
           
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
                .min(1, "veuillez cocher au moins une case"),
            currentstate_ids: z
                .string("ce champ est obligatoire")
                .min(1, "veuillez cocher au moins une case"),
            author_ids: z
                .string("ce champ est obligatoire")
                .min(1, "veuillez cocher au moins une case")
        });
        
        // validation de la saisie du formmulaire
        const validation = await constraints.safeParseAsync(data);

        // si la validation échoue
        if (!validation.success) {
            return validation.error;
        }
        // si la validation réussi
            return validation.data as Partial<Book>;
            
            
    };

}

export default AdminBookFormValidator;