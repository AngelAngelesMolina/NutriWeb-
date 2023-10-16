const router = require("../routers/pesoEntries");
const request = require("supertest");
const express = require("express");

describe("pesoEntries End-to-end Test", () => {
	describe("pesoEntries /pesoEntries", () => {
		it("should return error 401 if there's no token", async () => {
			// Arrange
			const app = express();
			app.use(router);

			// Act
			const response = await request(app).post("/entry").send();

			// Assert
			expect(response.statusCode).toBe(401);
		});

		it("should return status 201 if the entry is inserted in database", async () => {});
	});
});