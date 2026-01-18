import { Link } from "react-router"
import style from "../../../assets/css/admin/dashboard.module.css"

const DashboardNav = () => {
    return <div className={style.dashboard}>
            <Link to={"/admin"}><p>Dashboard</p></Link>
            
            <div className="links">
        <Link to={"/admin/books"}><p>books</p></Link>
        <Link to={"/admin/agenda"}><p>Agenda</p></Link>
        <Link to={"/admin/books"}><p>Info</p></Link>
        <Link to={"/admin/books"}><p>page d'accueil</p></Link>
       
            </div>
            </div>
   
}

export default DashboardNav;