// import style from "../../assets/css/formulaire_login.module.css"
import { use } from "react";
import AdminBookFormContent from "../../../components/admin/book/admin_book_form_content";
import CategoryApiService from "../../../services/category_api_service";
import AuthorApiService from "../../../services/authors_api_service";
import CurrentStateApiService from "../../../services/current_state_api_service";
import type { Category } from "../../../../models/category";
import type { Author } from "../../../../models/author";
import type { Currentstate } from "../../../../models/currentstate";
import style from "../../../assets/css/formulaire_crud.module.css"
import AdminBookFormValidator from "../../../validator/admin_book_form_validator";

const AdminBookForm = () => {
    // récupérer les catégories 
    const categories = use(new CategoryApiService().selectAll()).data as Category[];
    console.log(categories);

    const authors = use(new AuthorApiService().selectAll()).data as Author[];

    const currentstates = use(new CurrentStateApiService().selectAll()).data as Currentstate[];
    

    return  (
        <>
            <div className={style.page_formulaire}>
            <title> Gestion des livres - administration</title>

                <AdminBookFormContent categories={categories} authors={authors} currentstates={currentstates} validator={ new AdminBookFormValidator().validate } />
            </div>
        </>
      )
}

export default AdminBookForm;