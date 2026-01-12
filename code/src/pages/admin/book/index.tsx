import AdminBookHomeContent from "../../../components/admin/book/admin_book_home_content";
import DashboardLeft from "../../../components/admin/accueil/dashboard";
import style from "../../../assets/css/admin/dashboard.css"

const AddBook = () => {
    return <>
        <div className="dashboard-admin-book">
        <DashboardLeft />
        <h2>Gestion des livres</h2>
            <AdminBookHomeContent />
            </div>
        </>
}

export default AddBook;