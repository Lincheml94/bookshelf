import { NavLink } from "react-router";
import style from "../assets/css/footer.module.css";

const Footer = () => {
	return (
		<footer className={style.footernav}>
			<NavLink to={"/src/pages/mentions_legales.tsx"}>mentions légales</NavLink>
		</footer>
	);
};

export default Footer;
