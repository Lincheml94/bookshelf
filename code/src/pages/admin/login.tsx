import FormulaireLogin from "../../components/admin/login_formulaire";
import style from "../../assets/css/formulaire_login.module.css"
import Fond from "../../components/fonds/fond";

const Login = () => {
	return <>
		<div className={style.contentformulairelogin}>
			< FormulaireLogin /></div>
		<Fond />
		
	</>
	
};

export default Login;
