import { Fragment } from "react/jsx-runtime";
import styles from "../assets/css/hello.module.css";

const Hello = () => {
	const name = "Lina";
	const students = ["Prativa", "Aby", "Manon"];
	const isConnected = false;
	return (
		<div className={styles.hello}>
			<h1 className={styles.titre}>Coucou {name}</h1>
			<h2>ça va ?</h2>
			{
				isConnected ? "déconnexion" : "connection"
				// on considère que isConnected est true
			}
			<hr />
			<img src="/img/vite.svg" alt="" />
			<label htmlFor="toto">Nom :</label>
			<input type="text" id="toto" />

			{students.map((value) => (
				<p key={Math.random()}> {value} </p>
			))}
		</div>
	);
};

export default Hello;
