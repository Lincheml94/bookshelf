import { NavLink } from "react-router";
import style from "../../../assets/css/admin/dashboard.module.css";
import Logo from "../../icones/logo";

const DashboardNav = () => {
	return (
		<div className={style.dashboardnav}>
			<NavLink to={"/admin"}>
				<Logo />
			</NavLink>

			<div className={style.links}>
				<NavLink to={"/admin/books"}>
					<p>livres</p>
				</NavLink>
				<NavLink to={"/admin/"}>
					<p>évènements</p>
				</NavLink>
				<NavLink to={"/admin/"}>
					<p>newsletter</p>
				</NavLink>
				<NavLink to={"/admin/"}>
					<p>utilisateur.ice.s</p>
				</NavLink>
			</div>
		</div>
	);
};

export default DashboardNav;
