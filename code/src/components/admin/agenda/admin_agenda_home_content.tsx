import { Link } from "react-router";
const AdminBookHomeContent = () => {

    return <>
        
            <Link to={"/admin/book_form"}>
                <button type="submit">Ajouter un livre</button>
            </Link>
               
            {/* <Link to={"/"}> */}
                {/* <button type="submit">Modifier un livre</button>
            </Link>        
                
            <Link to={"/"}>
                <button type="submit">Supprimer un livre</button>
            </Link> */}
            
            </>
}

export default AdminBookHomeContent;