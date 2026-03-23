import style from "../../assets/css/formulaire_register.module.css";

const FormulaireRegister = () => {
	return (
		<form method="post" action="" className={style.register}>
			<h2>S'inscrire</h2>
			<label htmlFor="email">email</label>
			<input type="text" id="firstName" name="firstName" />

			<label htmlFor="password">mot de passe</label>
			<input type="password" id="password" name="password" />

			<button type="submit">envoyer</button>
		</form>
	);
};

export default FormulaireRegister;
