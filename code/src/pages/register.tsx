import style from "../assets/css/formulaire_login.module.css";
import FormulaireRegister from "../components/register/register_formulaire";

const Registrer = () => {
	return (
		<div className={style.contentformulaireregister}>
			<FormulaireRegister />
		</div>
	);
};

export default Registrer;
