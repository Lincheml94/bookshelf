"use client";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { User } from "../../../models/user";
import style from "../../assets/css/formulaire_register.module.css";
import SecurityApiService from "../../services/security_api_service";

const FormulaireRegister = (): React.JSX.Element => {
	const emailId = useId();
	const passwordId = useId();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Partial<User>>();

	const submitForm = async (data: Partial<User>) => {
		console.log(data);

		const process = new SecurityApiService().register(data);
	};

	return (
		<form onSubmit={handleSubmit(submitForm)} className={style.register}>
			<h2>Créer un compte</h2>
			<label htmlFor={emailId}>email</label>
			<input
				type="text"
				id={emailId}
				{...register("email", {
					required: "L'email est obligatoire",
					maxLength: {
						value: 100,
						message: "un email doit comporter au minimum",
					},
				})}
			/>

			<label htmlFor={passwordId}>mot de passe</label>
			<input
				type="password"
				id={passwordId}
				{...register("password", {
					required: "Le mot de passe est obligatoire",
					maxLength: {
						value: 100,
						message: "un email doit comporter au minimum 5 caractères",
					},
				})}
			/>

			<button type="submit">envoyer</button>
		</form>
	);
};

export default FormulaireRegister;
