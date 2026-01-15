"use client";
import { useId } from "react";
import type { AdminBookFormContentProps } from "../../../models/props/admin/admin_book_form_content_props";
import style from "../../../assets/css/formulaire_crud.module.css"



// import { Link } from "react-router";
const AdminAgendaFormContent = () => {
    

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
          
            </div>
               
           
            
            </>
}

export default AdminAgendaFormContent;