import style from "../assets/css/formulaire_login.module.css";
import Fond from "../components/fonds/fond";
import FormulaireRegister from "../components/register/register_formulaire";

const Registrer = () => {
	return (
		<>
			<div className={style.contentformulairelogin}>
				<FormulaireRegister />
			</div>
			<Fond />
		</>
	);
};

export default Registrer;
