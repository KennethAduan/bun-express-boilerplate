// # Unit tests for isolated functions or components

import { describe, expect, it, beforeEach } from "bun:test";
import { UserService } from "@/services/user.service";
import prisma from "@/config/database";
import { mockUserData } from "../mocks/user.mock";

describe("UserService", () => {
  beforeEach(async () => {
    // Clean database before each test
    await prisma.user.deleteMany();
  });

  describe("createUser", () => {
    it("should create a new user", async () => {
      const user = await UserService.createUser(mockUserData);

      expect(user.email).toBe(mockUserData.email);
      expect(user.name).toBe(mockUserData.name);
      // Password should be hashed
      expect(user.password).not.toBe(mockUserData.password);
    });

    it("should throw error if email exists", async () => {
      // Create first user
      await UserService.createUser(mockUserData);

      // Try to create user with same email
      await expect(UserService.createUser(mockUserData)).rejects.toThrow(
        "Email already exists",
      );
    });
  });

  describe("findByEmail", () => {
    it("should find user by email", async () => {
      // Create test user
      await UserService.createUser(mockUserData);

      const user = await UserService.findByEmail(mockUserData.email);
      expect(user?.email).toBe(mockUserData.email);
    });

    it("should return null for non-existent email", async () => {
      const user = await UserService.findByEmail("nonexistent@example.com");
      expect(user).toBeNull();
    });
  });
});
