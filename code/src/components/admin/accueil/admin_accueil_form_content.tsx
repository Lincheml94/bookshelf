// "use client";
// import { useId } from "react";
// import type { AdminBookFormContentProps } from "../../../models/props/admin/admin_book_form_content";
// import style from "../../../assets/css/formulaire_crud.module.css"
// import { register } from "tsx/cjs/api";
// import { useForm } from "react-hook-form";



// // import { Link } from "react-router";
// const AdminAccueilFormContent = ({categories, authors, currentstates}:AdminBookFormContentProps) => {
//     // créer de identifiants pour chaque champs de formulaire
//     const idId = useId();
//     const titleId = useId();
//     const published_atId = useId();
//     const priceId = useId();
//     const pagesId = useId();
//     const dimensionsId = useId();
//     const imagesId = useId();
//     const isbnId = useId();
//     const printId = useId();
    
//     /*
//     react hook form */
//     const { register, handleSubmit, reset, formState: {errors} } = useForm();


//     return <>
//         <div className={style.formulaire_crud}>
//         <h2>Gérer les livres</h2>
//         {/* si le formulaire contient un champ de fichier : 
//                 - ajouter attribut enctype=" multipart/form-data"
//                 - pour les champs relation :
//                     FK : pour les clés étrangères, créer soit une liste déroulante <select>, soit bouton radio : sélection d'un seul choix
//                     table de jointure : cases à cocher : sélectionner plusieurs choix
//                 */
                
//             }
//           <form encType="multipart/form-data">
//             <p>   
//             <label htmlFor={titleId}>Titre</label>
//             <input type="text" id ={titleId} {...register('title')} />
//             </p> 
//             <p>
//             <label htmlFor={published_atId}>Date de publication</label>
//             <input type="date" id={published_atId} {...register('published_at')} />
//             </p> 
//             <p>
//             <label htmlFor={priceId}>Prix</label>
//             <input type="text" id={priceId} {...register('price')} />
//             </p> 
//             <p>
//             <label htmlFor={pagesId}>Nombre de pages</label>
//             <input type="text" id={pagesId} {...register('pages')} />
//             </p> 
//             <p>
//             <label htmlFor={dimensionsId}>Dimensions</label>
//             <input type="text" id={dimensionsId} {...register('dimensions')} />
//             </p> 
//             <p>
//             <label htmlFor={imagesId}>Charger une image</label>
//             <input type="text" id={imagesId} {...register('images')} />
//             </p> 
//             <p>
//             <label htmlFor={isbnId}>isbn</label>
//             <input type="text" id={isbnId} {...register('isbn')} />
//             </p> 
//             <p>
//             <label htmlFor={printId}>technique d'impression</label>
//             <input type="text" id={printId} {...register('print')} />
//             </p> 
//             <input type="hidden" id={idId} {...register('id')}/>
            

//             {/* category  */}
//             <div>
//                 <p>Catégories :</p>
//                 {
//                     categories.map((item) => {
//                         return (
//                             <p key={item.id}>
//                                 <input type="checkbox" value={item.id} id={item.id as unknown as string}
                                    
//                                     name="category_ids"
//                                 />
//                             <label>{ item.name }</label>
//                             </p>
//                         )
//                     })
//                 }
//             </div>
//             {/* currentstate */}
//             <div>
//                 <p>Etat(s) :</p>
//                 {
//                     currentstates.map((item) => {
//                         return (
//                             <p key={item.id}>
//                                 <input type="checkbox" value={item.id} id={item.id as unknown as string}
                                    
//                                     name="currentstate_ids"
//                                 />
//                             <label>{ item.statename }</label>
//                             </p>
//                         )
//                     })
//                 }
//             </div>
//             {/* author */}
//             <div>
//                 <p>Auteur.ice(s)</p>
//                 {
//                     authors.map((item) => {
//                         return (
//                             <p key={item.id}>
//                                 <input type="checkbox" value={item.id} id={item.id as unknown as string}
                                    
//                                     name="author_ids"
//                                 />
//                             <label>{ item.firstname }</label>
//                             </p>
//                         )
//                     })
//                 }
//             </div>

//               <button type="submit">Créer un livre</button>
//             </form >
//             </div>
               
           
            
//             </>
// }

// export default AdminAccueilFormContent;