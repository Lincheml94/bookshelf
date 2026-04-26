import { NavLink } from "react-router";
import style from "../../../assets/css/admin/dashboard.module.css";

// import LogoLivre from "../../icones/logo_livre";

const DashboardHeader = () => {
	return (
		<div className={style["header-dashboard"]}>
			<NavLink to={"/admin"}>
				<h1 className={style.title}>Bookshelf editions - Espace personnel</h1>
			</NavLink>
		</div>
	);
};

export default DashboardHeader;
