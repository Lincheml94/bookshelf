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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						fringilla rutrum nunc non pellentesque. Fusce mollis mollis diam,
						vitae vehicula felis ultricies in. Aliquam vulputate euismod arcu,
						et tempor urna posuere ac. Nulla non accumsan libero. Pellentesque
						pharetra et massa tempor fringilla. Sed tristique, risus at
						imperdiet mollis, ante velit pulvinar augue, eget mollis tellus leo
						sed massa. Morbi tempor, enim vitae semper viverra, est felis
						ultrices sem, quis feugiat neque est eget odio. Phasellus posuere,
						purus vel imperdiet imperdiet, diam nisl fringilla lectus, vitae
						malesuada ante dolor ut risus.
					</p>
				</div>
				<div className={style.un}>
					<h1>Membres</h1>
				</div>
				<div className={style.un}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						fringilla rutrum nunc non pellentesque. Fusce mollis mollis diam,
						vitae vehicula felis ultricies in. Aliquam vulputate euismod arcu,
						et tempor urna posuere ac. Nulla non accumsan libero. Pellentesque
						pharetra et massa tempor fringilla. Sed tristique, risus at
						imperdiet mollis, ante velit pulvinar augue, eget mollis tellus leo
						sed massa. Morbi tempor, enim vitae semper viverra, est felis
						ultrices sem, quis feugiat neque est eget odio. Phasellus posuere,
						purus vel imperdiet imperdiet, diam nisl fringilla lectus, vitae
						malesuada ante dolor ut risus.
					</p>
				</div>
			</div>
			<div className={style.infolinks}>
				<NavLink to={"/mentions_legales"}>mentions légales</NavLink>
				<Link to={""}>instagram</Link>
				<Link to={""}>instagram</Link>
			</div>
		</div>
	);
};

export default Presentation;
