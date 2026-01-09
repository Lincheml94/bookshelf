"use client";
import { useId } from "react";
import type { AdminBookFormContentProps } from "../../../models/props/admin/admin_book_form_content_props";
import style from "../../../assets/css/formulaire_crud.module.css"
import type { Book } from "../../../../models/book";
import { useForm } from "react-hook-form";


// import { Link } from "react-router";
const AdminBookFormContent = ({categories, authors, currentstates, validator}:AdminBookFormContentProps) => {
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
    
     /*
        react hook form 
        register : 
            -remplace l'attribut name
            - permet de référencer un champ de saisie 
            */
    
        const { register, handleSubmit, reset, formState: {errors} } = useForm<Partial<Book>>();
    
        // soumission du formulaire
        // data stocke la saisie du formulaire
        const submitForm = (data: Partial<Book>) => {
            console.log(data);
        }

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
            <p>   
            <label htmlFor={titleId}>Titre</label>
                    <input type="text"
                        id={titleId}
                        {...register('title', {
                            required: "Le titre est obligatoire",
                            maxLength: { value: 100, message: "un titre doit comporter au maximum 100 caractères" }
                        })} />

                    {/*afficher les messages d'erreur : utiliser le name du champ défini dans register  */}
                    <p className={style.msg_erreur} role="alert">{ errors.title?.message}</p>
                </p> 
                
            {/* PUBLISHED_AT */}
            <p>
            <label htmlFor={published_atId}>Date de publication</label>
                    <input type="date" id={published_atId} {...register('published_at', {
                required : "La date est obligatoire"
                    })} />
                     <p className={style.msg_erreur} role="alert">{ errors.title?.message}</p>
                </p> 
                
                {/* PRICE */}
                <p>
            <label htmlFor={priceId}>Prix</label>
                    <input type="text" id={priceId} {...register('price', {
                required: "le prix est obligatoire",
                 min: {
                     value: 1,
                     message: "le prix doit être de minimum 1 euro"
                 },
                 max: {
                     value :999.99,
                     message: "le prix doit être de maximum 999,99 euros"
                 }
                    })} />
            <p className={style.msg_erreur} role="alert">{ errors.price?.message}</p>
                </p> 

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
                     <p className={style.msg_erreur} role="alert">{ errors.pages?.message}</p>
                </p> 

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
                     <p className={style.msg_erreur} role="alert">{ errors.dimensions?.message}</p>
                </p> 
            
            {/* IMAGE */}
            <p>
            <label htmlFor={imagesId}>Charger une image</label>
                    <input type="text" id={imagesId} {...register('images', {
                required: "ce champ est obligatoire"
            })} />
                </p> 
                 <p className={style.msg_erreur} role="alert">{ errors.images?.message}</p>
            
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
                     <p className={style.msg_erreur} role="alert">{ errors.isbn?.message}</p>
                </p> 

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
                     <p className={style.msg_erreur} role="alert">{ errors.print?.message}</p>
                </p> 
            
            {/* ID HIDDEN */}
            <input type="hidden" id={idId} {...register('id')}/>
            

            {/* CATEGORY  */}
            <div>
                <p>Catégories :</p>
                {
                    categories.map((item) => {
                        return (
                            <p key={item.id}>
                                <input type="checkbox" value={item.id} id={item.id as unknown as string}
                                    
                                    {...register("category_ids", {
                                        required: "cochez au moins une case",

                                    })} />
                                <label>{item.name}</label>
                                <p className={style.msg_erreur} role="alert">{ errors.print?.message}</p>
                            </p>
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
                            <p key={item.id}>
                                <input type="checkbox" value={item.id} id={item.id as unknown as string}
                                    
                                    name="currentstate_ids"
                                />
                            <label>{ item.statename }</label>
                            </p>
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
                            <p key={item.id}>
                                <input type="checkbox" value={item.id} id={item.id as unknown as string}
                                    
                                    name="author_ids"
                                />
                            <label>{ item.firstname }</label>
                            </p>
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