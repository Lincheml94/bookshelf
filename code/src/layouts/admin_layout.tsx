import { Outlet } from "react-router";
import style from "../assets/css/admin/dashboard.module.css";
import DashboardHeader from "../components/admin/accueil/dashboard_header";
import DashboardNav from "../components/admin/accueil/dashboard_nav";

const AdminLayout = () => {
	return (
		<>
			<DashboardNav />
			<div className={style["main-dashboard"]}>
				<DashboardHeader />
				<Outlet />
			</div>
		</>
	);
};
export default AdminLayout;
