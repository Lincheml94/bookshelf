import { Outlet } from "react-router";
import style from "../assets/css/admin/dashboard.module.css";
import DashboardHeader from "../components/admin/accueil/dashboard_header";
import DashboardNav from "../components/admin/accueil/dashboard_nav";
import Guard from "../components/shared/guard";

const AdminLayout = () => {
	return (
		<Guard roles={["Admin", "Editeur"]}>
			{/* <> */}
			<DashboardNav />
			<div className={style["main-dashboard"]}>
				<DashboardHeader />
				<div className={style["sub-dashboard"]}>
					<Outlet />
				</div>
			</div>
		</Guard>
		// </>
	);
};
export default AdminLayout;
