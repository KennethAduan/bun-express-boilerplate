// # Integration tests for multiple modules working together

import { describe, expect, it, beforeEach } from "bun:test";
import supertest from "supertest";
import { createApp } from "../../index";
import { cleanDatabase } from "../helpers/test.utils";

describe("User Routes", () => {
  const app = createApp();
  const request = supertest(app);

  beforeEach(async () => {
    await cleanDatabase();
  });

  describe("POST /api/v1/users", () => {
    it("should create new user", async () => {
      const userData = {
        email: "test@example.com",
        password: "password123",
        name: "Test User",
      };

      const response = await request.post("/api/v1/users").send(userData);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body.email).toBe(userData.email);
      expect(response.body).not.toHaveProperty("password");
    });

    it("should validate email format", async () => {
      const response = await request.post("/api/v1/users").send({
        email: "invalid-email",
        password: "password123",
      });

      expect(response.status).toBe(400);
      expect(response.body.message).toContain("email");
    });
  });

  describe("GET /api/v1/users/me", () => {
    it("should require authentication", async () => {
      const response = await request.get("/api/v1/users/me");
      expect(response.status).toBe(401);
    });
  });
});
