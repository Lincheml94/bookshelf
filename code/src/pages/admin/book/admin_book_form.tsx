// import style from "../../assets/css/formulaire_login.module.css"
import { use } from "react";
import AdminBookFormContent from "../../../components/admin/book/admin_book_form_content";
import CategoryApiService from "../../../services/category_api_service";
import AuthorApiService from "../../../services/authors_api_service";
import CurrentStateApiService from "../../../services/current_state_api_service";
import BookApiService from "../../../services/book_api_service";
import type { Category } from "../../../../models/category";
import type { Author } from "../../../../models/author";
import type { Currentstate } from "../../../../models/currentstate";
import style from "../../../assets/css/formulaire_crud.module.css"
import AdminBookFormValidator from "../../../validator/admin_book_form_validator";
import DashboardLeft from "../../../components/admin/accueil/dashboard";
import type { AdminBookParams } from "../../../models/params/admin_book_params";
import type { Book } from "../../../../models/book";


const AdminBookForm = ({ params }: AdminBookParams) => {
    // récupérer la variable d'URL
    // décomposition / déconstruction d'un objet
    const { id } = params;

    // récupérer les données à mettre à jour
    let dataToUpdate: Book | undefined; 

    // si un identifiant est présent dans l'URL
    if (id) {
        // la méthode then équivaut à await : then
       dataToUpdate = use(new BookApiService().selectOne(id)).data as Book; 
    }


    
    // récupérer les catégories 

    const categories = use(new CategoryApiService().selectAll()).data as Category[];

    const authors = use(new AuthorApiService().selectAll()).data as Author[];

    const currentstates = use(new CurrentStateApiService().selectAll()).data as Currentstate[];
    

    return  (
        <>
            <div className="dashboard-admin-book">
            <DashboardLeft />
            <div className={style.page_formulaire}>
            <title> Gestion des livres - administration</title>

                <AdminBookFormContent dataToUpdate={dataToUpdate} categories={categories} authors={authors} currentstates={currentstates} validator={ new AdminBookFormValidator().validate } />
                </div>
                </div>
        </>
      )
}

export default AdminBookForm;