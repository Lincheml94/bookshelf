// import React from 'react'
// import style from "../assets/css/formulaire_contact.module.css"
"use client";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { Contact } from "../../../models/contact";
import ContactApiService from "../../services/contact_api_service";

const FormulaireContact = (): React.JSX.Element => {
	const emailId = useId();
	const subjectId = useId();
	const messageId = useId();
	const navigate = useNavigate();
	const [serverErrors, setServerErrors] = useState<Partial<Contact>>();

	const [message, setMessage] = useState<string>("");

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<Partial<Contact>>();

	const submitForm = async (data: Partial<Contact>) => {
		try {
			const process = await new ContactApiService().insert(data as Contact);

			if ([200, 201].includes(process.status)) {
				reset();
				navigate("/");
			} else {
				throw new Error();
			}
		} catch (error) {}
	};

	return (
		<>
			<h2>Contact</h2>
			{message ? <p role="alert">{message}</p> : null}
			<form onSubmit={handleSubmit(submitForm)}>
				<label htmlFor={emailId}>Email</label>
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
				<p role="alert">{errors.email?.message ?? serverErrors?.email}</p>

				<label htmlFor={subjectId}>Sujet</label>
				<input
					type="subject"
					id={subjectId}
					{...register("subject", {
						required: "Le sujet est obligatoire",
						maxLength: {
							value: 100,
							message: "le sujet doit comporter au maximum 100 caractère",
						},
					})}
				/>
				<p role="alert">{errors.subject?.message ?? serverErrors?.subject}</p>

				<label htmlFor={messageId}>Dites-nous</label>
				<textarea
					id={messageId}
					{...register("message", {
						required: "Le message de passe est obligatoire",
						maxLength: {
							value: 200,
							message: "un message doit comporter au minimum 5 caractères",
						},
					})}
				></textarea>
				<p role="alert">{errors.message?.message ?? serverErrors?.message}</p>

				<button type="submit">envoyer</button>
			</form>
		</>
	);
};

export default FormulaireContact;
