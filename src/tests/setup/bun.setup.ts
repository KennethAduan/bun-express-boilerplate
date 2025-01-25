// # Environment and configuration setup

import { beforeAll, afterAll } from "bun:test";
import prisma from "@/config/database";

beforeAll(async () => {
  // Connect to test database
  await prisma.$connect();
});

afterAll(async () => {
  // Cleanup and disconnect
  await prisma.$disconnect();
});
