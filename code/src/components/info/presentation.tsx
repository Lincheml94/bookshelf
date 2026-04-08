import { Link, NavLink } from "react-router";
import style from "../../assets/css/info.module.css";

const Presentation = () => {
	return (
		<div className={style.box}>
			<div className={style.infobox}>
				<div className={style.un}>
					<h1>Presentation</h1>
				</div>

				<div className={style.un}>
					<p>
						Bookshelf Editions est une maison d'édition indépendante fondée en
						2015 par deux pasisonnées de litterature et de poésie. Nous avons à
						coeur de soutenir des auteur.ice.s émergent.e.s.
						<br /> Nous organisons régulièrement des évènements pour que vous
						puissiez rencontrer ces nouveaux acteurs de la scène littéraire.
					</p>
				</div>
				<div className={style.un}>
					<h1>Membres</h1>
				</div>
				<div className={style.un}>
					<p>
						Emma B., co-fondatrice de Bookshelf Editions, responsable éditoriale
					</p>
					<br />
					<p>Amina F., responsable en communication</p>
					<br />
					<p>Julia P., graphiste</p>
				</div>
			</div>
			<div className={style.infolinks}>
				<NavLink to={"/mentions_legales"}>mentions légales</NavLink>
				<Link to={""}>instagram</Link>
				<Link to={""}>contact@bookshelfeditions.com</Link>
			</div>
		</div>
	);
};

export default Presentation;
