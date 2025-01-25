// # Shared helper utilities

import prisma from "@/config/database";

export const cleanDatabase = async () => {
  await prisma.user.deleteMany();
};

export const createTestUser = async () => {
  return await prisma.user.create({
    data: {
      email: "test@example.com",
      password: "hashedPassword123",
      name: "Test User",
    },
  });
};
