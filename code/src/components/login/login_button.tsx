// import style from "../../assets/css/login_button.module.css"

import { NavLink } from "react-router";
import style from "../../assets/css/login_button.module.css";

const LoginButton = () => {
	return (
		<button type="submit" className={style.button_login}>
			<NavLink to={"/login"}>@</NavLink>
		</button>
	);
};
export default LoginButton;
