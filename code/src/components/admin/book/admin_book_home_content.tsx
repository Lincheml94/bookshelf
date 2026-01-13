import { use } from "react";
import { Link } from "react-router";
import BookApiService from "../../../services/book_api_service";
import { map } from "zod";


const AdminBookHomeContent = () => {
    // récupération des menus
    const results = use(new BookApiService().selectAll()).data;
    // console.log(results);
    

    return <>
        
        <Link to={"/admin/book_form"}>
            <button type="submit">Ajouter un livre</button>
        </Link>
    
        {/* Affichage des livres */}
        
        {results?.map((item) => {

            return (
                <div key={item.id}>
                    <p>{item.title}</p>

                    <Link to={`/admin/book_form/${item.id}`}>
                        <button type="submit">Modifier un livre</button>
                    </Link>
                
                    <Link to={"/"}>
                        <button type="submit">Supprimer un livre</button>
                    </Link>

        
                
                </div>
            )
        })};
       
    
    </>
}
        


export default AdminBookHomeContent;