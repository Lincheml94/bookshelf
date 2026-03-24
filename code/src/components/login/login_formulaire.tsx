"use client";
import type React from "react";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import type { ZodIssue } from "zod/v3";
import type { User } from "../../../models/user";
import SecurityApiService from "../../services/security_api_service";

const FormulaireLogin = (): React.JSX.Element => {
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
		<form onSubmit={handleSubmit(submitForm)}>
			<h2>Se connecter</h2>
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

			<Link to={"/register"}>
				<p>Créer un compte</p>
			</Link>
			<Link to={"/admin"}>
				<p>Dashboard</p>
			</Link>
		</form>
	);
};

export default FormulaireLogin;
