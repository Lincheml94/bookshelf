import * as jose from "jose";
import supertest from "supertest";
import { describe, expect, it } from "vitest";
import type { Book } from "../../../models/book";
import type { User } from "../../../models/user";
import Server from "../../../server/core/server";

describe("book controller test suites", async () => {
	// configuration
	const apiRoute = "/api";
	const route = "/book";

	// admin
	const admin: User = {
		id: 1,
		email: "admin@editions.fr",
		password:
			"$argon2i$v=19$m=16,t=2,p=1$OEJPT3p0WnYyaWh2SHloUA$VooCQepwOAaEmfksALt0UQ",
		role_id: 1,
		role: {
			id: 1,
			name: "Admin",
		},
	};

	// token JWT
	const secret = new TextEncoder().encode(process.env.VITE_JWT_SECRET);
	const alg = "HS256";
	const token = await new jose.SignJWT(admin as User)
		.setProtectedHeader({ alg })
		.setExpirationTime("10h")
		.sign(secret);
	// console.log(token);
	// console.log(process.env);

	// fake data: fausses données
	const data: Partial<Book> = {
		id: 1,
		title: `name - ${Math.random()}`,
		published_at: "2020-02-02",
		price: 14,
		pages: "string",
		dimensions: "string",
		images: "allison_dorothy.webp",
		isbn: "string",
		print: "string",
		description: "qzryzrhyeqr",
		category_ids: "1",
		author_ids: "1",
		currentstate_ids: "1",
	};

	// tester le code 201 renvoyé par la réponse
	it("should returns a 201 status code when a record is inserted", async () => {
		// arrange
		const expected = 201;
		const sut = supertest(new Server().start());

		// act
		/*
			envoyer des données dans body :
				si une image est présente : 
					utiliser la méthode field pour chaque champ
					utiliser ma méthode attach pour transférer une image
				si il n'y a pas d'image :
					méthode send(JSON)
		*/
		const response = await sut
			.post(`${apiRoute}${route}`)
			.auth(token, { type: "bearer" })
			.field("title", data.title as string)
			.field("published_at", data.published_at as string)
			.field("price", data.price as number)
			.field("pages", data.pages as string)
			.field("dimensions", data.dimensions as string)
			.attach("images", `${process.env.PUBLIC_DIR}/img/book/${data.images}`)
			.field("isbn", data.isbn as string)
			.field("print", data.print as string)
			.field("description", data.description as string)
			.field("category_ids", data.category_ids as string)
			.field("author_ids", data.author_ids as string)
			.field("currentstate_ids", data.currentstate_ids as string);

		// console.log(response);

		const actual = response.status;
		// assert
		expect(actual).toBe(expected);
	});
});
