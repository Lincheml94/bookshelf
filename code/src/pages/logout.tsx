"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import SecurityService from "../services/security_service";

const Logout = () => {
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// supprimer à l'affichage du composant / page
	// useEffect : permet de déclencher à l'affichage
	useEffect(() => {
		// const reset = async () => {
		// 	// supprimer l'utilisateur stocké
		// 	// on va passer le user à null
		// 	new SecurityService().setUser(null);

		// 	// supprimer le token JWT : on passe le token à null
		// 	await new SecurityService().setToken(null);
		// };
		// reset();
		// déconnexion
		new SecurityService().logout();
		// redirection vers une route react
		navigate("/");
	}, [navigate]);

	return <> </>;
};

export default Logout;
