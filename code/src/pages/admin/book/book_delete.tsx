"use client";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { Book } from "../../../../models/book";
import type { AdminBookParams } from "../../../models/params/admin_book_params";
import BookApiService from "../../../services/book_api_service";

const AdminBookDelete = ({ params }: AdminBookParams) => {
	const { id } = params;

	// useNavigate permet de créer une redirection
	const navigate = useNavigate();
	// Pré remplir le formulaire avant l'affichage du composant
	useEffect(() => {
		new BookApiService().delete({ id: id } as Book).then(() => {
			navigate("/admin/books");
			return;
		});
	}, [id, navigate]);

	return (
		<>
			<title>Gestion de Book</title>
		</>
	);
};

export default AdminBookDelete;
