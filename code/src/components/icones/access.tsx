"use client";
import { useState } from "react";
import { FaUniversalAccess } from "react-icons/fa6";

const Access = () => {
	// créer un état : hook use State
	// const navMobileIsVisible:boolean = false;
	const [accessMode, setaccessMode] = useState<boolean>(false);

	// gestionnaire d'évènement

	const handleClic = () => {
		// modifier la valeur de l'état : utiliser obligatoirement le setter de l'état
		//  ! : négation, donc !accessMode : on va aller chercher la valeur contraire du boolean
		setaccessMode(!accessMode);
		// console.log(accessMode);
	};

	return <FaUniversalAccess onClick={handleClic} />;
};
export default Access;
