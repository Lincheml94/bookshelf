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
		// supprimer l'utilisateur stocké
		// on va passer le user à null
		new SecurityService().setUser(null);
		navigate("/");
	}, [navigate]);

	return <> </>;
};

export default Logout;
