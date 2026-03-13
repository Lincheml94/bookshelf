import style from "../../assets/css/admin/dashboard.module.css";
import DashboardHeader from "../../components/admin/accueil/dashboard_header";
import DashboardNav from "../../components/admin/accueil/dashboard_nav";
import DashboardContent from "../../components/admin/accueil/dashboard-content";

const Dashboard = () => {
	return (
		<>
			<DashboardNav />
			<div className={style["main-dashboard"]}>
				<DashboardHeader />
				<DashboardContent />
			</div>
		</>
	);
};

export default Dashboard;
