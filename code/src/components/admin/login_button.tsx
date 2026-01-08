import style from "../../assets/css/login_button.module.css"
import { NavLink } from "react-router"

const LoginButton = () => {
    return (
        <button className={style.button_login}>
            <NavLink to={"/login"}>@</NavLink>
    </button>
)
}
export default LoginButton