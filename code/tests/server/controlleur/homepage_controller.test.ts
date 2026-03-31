import supertest from "supertest";
import { describe, expect, it } from "vitest";
import Server from "../../../server/core/server";

// const sum = (n1: number, n2: number) => n1 + n2;

// describe permet de regrouper plusieurs tests
// describe("Sum test suites", () => {
// 	// it permet de créer un test
// 	it("should returns a sum of two numbers", () => {
// 		// arrange :organiser
// 		// expected est le résultat attendu
// 		const expected = 5;
// 		const n1 = 3;
// 		const n2 = 2;
// 		// act : agir
// 		// actual permet de définir l'obtention du résultat attendu
// 		const actual = sum(n1, n2);
// 		// assert : affirmer
// 		expect(actual).toBe(expected);
// 	});
// });
describe("homepage controller test suites", () => {
	const apiRoute = "/api";
	const route = "/";
	// Tester le code 200 renvoyé par la route
	it("should returns status 200", async () => {
		// arrange :organiser
		// expected est le résultat attendu
		const expected = 200;
		// sut : system under test : je teste le serveur avec supertest : permet de simuler le serveur
		const sut = supertest(new Server().start());
		// act : agir
		// actual permet de définir l'obtention du résultat attendu
		const response = await sut.get(`${apiRoute}${route}`);
		const actual = response.status;
		// assert : affirmer
		expect(actual).toBe(expected);
	});
});
