import { Link } from "react-router"
import style from "../../../assets/css/admin/dashboard.css"

const DashboardLeft = () => {
    return <>
        <div className="dashboard">
             <h2>Dashboard</h2>
        <Link to={"/admin/books"}><p>books</p></Link>
        <Link to={"/admin/agenda"}><p>Agenda</p></Link>
        <Link to={"/admin/books"}><p>Info</p></Link>
        <Link to={"/admin/books"}><p>page d'accueil</p></Link>
    </div>
    </>
}

export default DashboardLeft