import style from "../../../assets/css/admin/dashboard.module.css";

const DashboardHeader = () => {
	return (
		<div className={style["header-dashboard"]}>
			<h1 className={style.title}>Bookshelf editions - Espace personnel</h1>
		</div>
	);
};

export default DashboardHeader;
