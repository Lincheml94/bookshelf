import AdminBookHomeContent from "../../../components/admin/book/admin_book_home_content";
import style from "../../../assets/css/admin/dashboard.module.css"
import DashboardNav from "../../../components/admin/accueil/dashboard_nav";

const AddBook = () => {
    return <>
        <div className={style.dashboardcontent}>
            <DashboardNav />
            <div className={style.dashboardcontentright}>
                <h2>Gestion des livres</h2>
                <AdminBookHomeContent />
            </div>
        </div>
        </>
}

export default AddBook;

// PAGE PRINCIPALE GESTION DES LIVRES (Ajout + liste des livres)