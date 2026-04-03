"use client";
import { NavLink } from "react-router";
import style from "../../assets/css/login_button.module.css";
import SecurityService from "../../services/security_service";

// import SecurityService from "../../services/security_service";

const LoginButton = () => {
	// return (
	// 	<button type="submit" className={style.button_login}>
	// 		<NavLink to={"/login"}>@</NavLink>
	// 	</button>
	// );

	return new SecurityService().getUser() ? (
		// si l'utilisateur est connecté

		<NavLink to={"/logout"}>
			<button type="submit" className={style.button_login}>
				x
			</button>
		</NavLink>
	) : (
		// si l'utilisateur n'est pas connecté

		<NavLink to={"/login"}>
			<button type="submit" className={style.button_login}>
				@
			</button>
		</NavLink>
	);
};
export default LoginButton;
