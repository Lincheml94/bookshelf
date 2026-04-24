"use client";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { GuardProps } from "../../models/props/guard_props";
import SecurityService from "../../services/security_service";

const Guard = ({ roles, children }: GuardProps) => {
	// useNavigate permet de créer une redirection
	const navigate = useNavigate();

	// vérifier le rôle à l'affichage du composant / page
	// useEffect : permet de déclencher l'action à l'affichage
	useEffect(() => {
		// chercher dans SecurityService les users
		const user = new SecurityService().getUser();
		// tester si il y a un utilisateur ET que son rôle ne correspond pas à ce qu'on veut
		// -1 : pas dans la liste
		if (roles.indexOf(user?.role?.name as string) === -1) {
			navigate("/");
		}
	}, [roles.indexOf, navigate]);

	return <>{children}</>;
};

export default Guard;
