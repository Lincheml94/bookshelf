import style from "../assets/css/formulaire_login.module.css";
import Fond from "../components/fonds/fond";
import FormulaireLogin from "../components/login/login_formulaire";

const Login = () => {
	return (
		<>
			<div className={style.contentformulairelogin}>
				<FormulaireLogin />
			</div>
			<Fond />
		</>
	);
};

export default Login;
