import style from "../../assets/css/agenda.module.css";

const ContentAgenda = () => {
	return (
		<div className={style.agenda}>
			<h2>Agenda</h2>
			<p>Nos dernières évènements</p>
			<div className={style.cartel}>
				<div className={style.img_container}>
					<img
						src="/img/agenda/Capture d’écran 2026-04-23 163258.png"
						alt="dédicace"
					/>
				</div>

				<div>
					<p>Séance de lecture de l'autrice Héloise Brézillon</p>
					<p>Librairie Les mots à la Bouche, Paris</p>
					<p>15 mars 2026</p>
				</div>
			</div>
			<div className={style.cartel}>
				<div className={style.img_container}>
					<img
						src="/img/agenda/david-monje-kAjC4n9f5pk-unsplash.jpg"
						alt="dédicace"
					/>
				</div>
				<div>
					<p>Séance de lancement de T3M d'Héloise Brezillon</p>
					<p>Librairie Les mots à la Bouche, Paris</p>
					<p>15 mars 2026</p>
				</div>
			</div>
			<div className={style.cartel}>
				<div className={style.img_container}>
					<img
						src="/img/agenda/febri-adiawarja-BFp-P0UnCCc-unsplash.jpg"
						alt="dédicace"
					/>
				</div>
				<div>
					<p>Séance de décicace Phoebe Hadjimarkos Clark</p>
					<p>Librairie Le Monte en L'Air, Paris</p>
					<p>15 mars 2026</p>
				</div>
			</div>
			<div className={style.cartel}>
				<div className={style.img_container}>
					<img
						src="/img/agenda/Capture d’écran 2026-04-23 163400.png"
						alt="dédicace"
					/>
				</div>
				<div>
					<p>Séance de lecture de l'autrice Héloise Brézillon</p>
					<p>Librairie Encres invisibles, Nantes</p>
					<p>15 mars 2026</p>
				</div>
			</div>
			<div className={style.cartel}>
				<div className={style.img_container}>
					<img
						src="/img/agenda/michael-newton-BRLNCPNsWB0-unsplash.jpg"
						alt="dédicace"
					/>
				</div>
				<div>
					<p>Séance de lecture de l'autrice Héloise Brézillon</p>
					<p>Librairie La folie d'Encre, Les Lilas</p>
					<p>17 novembre 2025</p>
				</div>
			</div>
		</div>
	);
};

export default ContentAgenda;
