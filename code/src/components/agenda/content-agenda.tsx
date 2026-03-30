import style from "../../assets/css/agenda.module.css";

const ContentAgenda = () => {
	return (
		<div className={style.agenda}>
			<h2>Agenda</h2>
			<p>Nos dernières évènements</p>
			<div className={style.cartel}></div>
			<div className={style.cartel}></div>
			<div className={style.cartel}></div>
			<div className={style.cartel}></div>
			<div className={style.cartel}></div>
		</div>
	);
};

export default ContentAgenda;
