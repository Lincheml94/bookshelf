import { Link } from "react-router";
import style from "../../../assets/css/admin/dashboard.module.css";
import Logo from "../../accueil/logo";

const DashboardNav = () => {
	return (
		<div className={style.dashboard}>
			<Link to={"/admin"}>
				<Logo />
			</Link>

			<div className="links">
				<Link to={"/admin/books"}>
					<p>livres</p>
				</Link>
				<Link to={"/admin/"}>
					<p>évènements</p>
				</Link>
				<Link to={"/admin/"}>
					<p>newsletter</p>
				</Link>
				<Link to={"/admin/"}>
					<p>utilisateur.ice.s</p>
				</Link>
			</div>
		</div>
	);
};

export default DashboardNav;
