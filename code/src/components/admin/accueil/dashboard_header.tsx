import style from "../../../assets/css/admin/dashboard.module.css";

// import LogoLivre from "../../icones/logo_livre";

const DashboardHeader = () => {
	return (
		<div className={style["header-dashboard"]}>
			<h1 className={style.title}>Bookshelf editions - Espace personnel</h1>
			{/* <LogoLivre displayMobile={false} /> */}
		</div>
	);
};

export default DashboardHeader;
