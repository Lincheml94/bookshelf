"use client";
import { useId } from "react";
import type { AdminBookFormContentProps } from "../../../models/props/admin/admin_book_form_content_props";
import style from "../../../assets/css/formulaire_crud.module.css"
import type { Book } from "../../../../models/book";
import { useForm } from "react-hook-form";
import type { ZodIssue } from "zod/v3";
import { useState } from "react";
import BookApiService from "../../../services/book_api_service";

// import { Link } from "react-router";
const AdminBookFormContent = ({ categories, authors, currentstates, validator }: AdminBookFormContentProps) => {
    // créer de identifiants pour chaque champs de formulaire
    const idId = useId();
    const titleId = useId();
    const published_atId = useId();
    const priceId = useId();
    const pagesId = useId();
    const dimensionsId = useId();
    const imagesId = useId();
    const isbnId = useId();
    const printId = useId();
    const descriptionId = useId();

    // stocker les messages d'erreur de validation côté serveur
    const [serverErrors, setServerErrors] = useState<Partial<Book>>();
     /*
        react hook form 
        register : 
            -remplace l'attribut name
            - permet de référencer un champ de saisie 
            */
    
        const { register, handleSubmit, reset, formState: {errors} } = useForm<Partial<Book>>();
    
        // soumission du formulaire
        // data stocke la saisie du formulaire
    const submitForm = async (data: Partial<Book>) => {
            
        // normaliser les données saisies : se base sur les données testées dans flashport pour que les données
        const normalizeData = {
            ...data,
            category_ids: (data.category_ids as unknown as string[]).join(),
            currentstate_ids: (data.currentstate_ids as unknown as string[]).join(),
            author_ids: (data.author_ids as unknown as string[]).join(),

        };
        
        // validation de la saisie avec le validateur côté serveur
        const validation = await validator(normalizeData);
        // console.log(validation);
    
        // si la validation échoue
        if (validation instanceof Error) {
            // stocker les messages d'erreur
            let errors = {};
            // récupérer les messages d'erreur
            (JSON.parse(validation.message) as ZodIssue[]).map((item) => {
                errors = { ...errors, [item.path.shift() as string]: item.message };
                return errors;
            });

            // définir l'état affichant les messages d'erreur côté serveur
            setServerErrors(errors);
            // stopper l'exécution du script
            return;
        
        }
        
        // Si la validation réussi
        // si le formulaire contient un champ de fichier : envoyer vers l'API un objet de type formData
        // formData : clé / valeur
        const formData = new FormData();
        // reprendre strictement le nom du champ du formulaire testé avec flashpost
        formData.set("id", normalizeData.id as unknown as string)
        formData.set("title", normalizeData.title as unknown as string)
        formData.set("published_at", normalizeData.published_at as unknown as string)
        formData.set("price", normalizeData.price as unknown as string)
        formData.set("pages", normalizeData.pages as unknown as string)
        formData.set("dimensions", normalizeData.dimensions as unknown as string)
        formData.set("images", normalizeData.images as unknown as string)
        formData.set("isbn", normalizeData.isbn as unknown as string)
        formData.set("print", normalizeData.print as unknown as string)
        formData.set("description", normalizeData.description as unknown as string)
        formData.set("category_ids", normalizeData.category_ids as string)
        formData.set("currentstate_ids", normalizeData.currentstate_ids as string)
        formData.set("author_ids", normalizeData.author_ids as string)
        
        //    requête HTTP vers l'API
        const process = await new BookApiService().insert(formData);
        console.log(process);
        
        
        
    };

    return <>
        <div className={style.formulaire_crud}>
        <h2>Gérer les livres</h2>
        {/* si le formulaire contient un champ de fichier : 
                - ajouter attribut enctype=" multipart/form-data"
                - pour les champs relation :
                    FK : pour les clés étrangères, créer soit une liste déroulante <select>, soit bouton radio : sélection d'un seul choix
                    table de jointure : cases à cocher : sélectionner plusieurs choix
                */
                
            }
            <form className={style.formulaire_crud} encType="multipart/form-data" onSubmit={handleSubmit(submitForm)}>
                
            {/* TITLE */}
            <p>   
            <label htmlFor={titleId}>Titre</label>
                    <input type="text"
                        id={titleId}
                        {...register('title', {
                            required: "Le titre est obligatoire",
                            maxLength: { value: 100, message: "un titre doit comporter au maximum 100 caractères" }
                        })} />

                    {/*afficher les messages d'erreur : utiliser le name du champ défini dans register  */}
                </p> 
                <p className={style.msg_erreur} role="alert">{ errors.title?.message ?? serverErrors?.title}</p>
                
                {/* PRICE */}
                <p>
            <label htmlFor={priceId}>Prix</label>
                    <input type="number" id={priceId} {...register('price', {
                required: "le prix est obligatoire",
                 minLength: {
                     value: 1,
                     message: "le prix doit être de minimum 1 euro"
                 },
                 maxLength: {
                     value :999.99,
                     message: "le prix doit être de maximum 999,99 euros"
                 }
                    })} />
                </p> 
                <p className={style.msg_erreur} role="alert">{ errors.price?.message ?? serverErrors?.price}</p>

            {/* PAGES */}
            <p>
            <label htmlFor={pagesId}>Nombre de pages</label>
                    <input type="text" id={pagesId} {...register('pages', {
                        required: "le nombre de pages est obligatoire",
                        maxLength: {
                            value: 20,
                            message: "le nombre de caractère est limité à 20"
                        }
                    })} />
                </p> 
                <p className={style.msg_erreur} role="alert">{ errors.pages?.message ?? serverErrors?.pages}</p>

            {/* DIMENSIONS */}
            <p>
            <label htmlFor={dimensionsId}>Dimensions</label>
                    <input type="text" id={dimensionsId} {...register('dimensions', {
                        required: "la dimension est obligatoire",
                        maxLength: {
                            value: 20,
                            message: "le nombre de caractère est limité à 20"
                        }
                    })} />
                </p> 
                <p className={style.msg_erreur} role="alert">{ errors.dimensions?.message ?? serverErrors?.dimensions}</p>
             
                {/* PUBLISHED_AT */}
            <p>
            <label htmlFor={published_atId}>Date de publication</label>
                    <input type="date" id={published_atId} {...register('published_at', {
                        required: "La date est obligatoire"
                    })} />
                </p> 
                <p className={style.msg_erreur} role="alert">{ errors.published_at?.message ?? serverErrors?.published_at}</p>
            
                {/* IMAGE */}
            <p>
            <label htmlFor={imagesId}>Charger une image</label>
                    <input type="text" id={imagesId} {...register('images', {
                required: "ce champ est obligatoire"
            })} />
                </p> 
                 <p className={style.msg_erreur} role="alert">{ errors.images?.message ?? serverErrors?.images}</p>
            
            {/* ISBN */}
            <p>
            <label htmlFor={isbnId}>isbn</label>
                    <input type="text" id={isbnId} {...register('isbn', {
                        required: "l'isbn est obligatoire",
                        maxLength: {
                            value: 40,
                            message: "le nombre de caractères est limité à 40"
                        }
                    })} />
                </p> 
                <p className={style.msg_erreur} role="alert">{ errors.isbn?.message ?? serverErrors?.isbn}</p>

            {/* PRINT */}
            <p>
            <label htmlFor={printId}>technique d'impression</label>
                    <input type="text" id={printId} {...register('print', {
                        required: "ce champ est obligatoire",
                        maxLength: {
                            value: 100,
                            message: "le nombre de caractères est limité à 100"
                        }
                    })} />
                </p> 
                 <p className={style.msg_erreur} role="alert">{ errors.print?.message ?? serverErrors?.print}</p>
            
                {/* DESCRIPTION */}
                 <p>
            <label htmlFor={descriptionId}>Description</label>
                    <input type="textarea" id={descriptionId} {...register('description', {
                        required: "ce champ est obligatoire",
                        maxLength: {
                            value: 1000,
                            message: "le nombre de caractères est limité à 1000"
                        }
                    })} />
                </p> 
                 <p className={style.msg_erreur} role="alert">{ errors.description?.message ?? serverErrors?.description}</p>
                

            {/* ID HIDDEN */}
            <input type="hidden" id={idId} {...register('id')}/>
            

            {/* CATEGORY  */}
            <div>
                <p>Catégories :</p>
                {
                    categories.map((item) => {
                        return (
                            <div key={item.id}>
                                <input type="checkbox" value={item.id} id={item.id as unknown as string}
                                    
                                    {...register("category_ids", {
                                        required: "cochez au moins une case",

                                    })} />
                                <label>{item.name}</label>
                                <p className={style.msg_erreur} role="alert">{ errors.category_ids?.message ?? serverErrors?.category_ids}</p>
                            </div>
                        )
                    })
                }
            </div>
            {/* CURRENTSTATE */}
            <div>
                <p>Etat(s) :</p>
                {
                    currentstates.map((item) => {
                        return (
                            <div key={item.id}>
                                <input type="checkbox" value={item.id} id={item.id as unknown as string}
                                    
                                    {...register("currentstate_ids", {
                                        required: "cochez au moins une case",

                                    })} />
                                <label>{item.statename}</label>
                                 <p className={style.msg_erreur} role="alert">{ errors.currentstate_ids?.message ?? serverErrors?.currentstate_ids}</p>
                            </div>
                        )
                    })
                }
                </div>
                
            {/* AUTHOR */}
            <div>
                <p>Auteur.ice(s)</p>
                {
                    authors.map((item) => {
                        return (
                            <div key={item.id}>
                               <input type="checkbox" value={item.id} id={item.id as unknown as string}
                                    
                                    {...register("author_ids", {
                                        required: "cochez au moins une case",

                                    })} />
                                <label>{item.firstname}</label>
                                 <p className={style.msg_erreur} role="alert">{ errors.author_ids?.message ?? serverErrors?.author_ids}</p>
                            </div>
                        )
                    })
                }
            </div>

              <button type="submit">Créer un livre</button>
            </form >
            </div>
               
           
            
            </>
}

export default AdminBookFormContent;