import { User } from "@prisma/client";

import { AppError } from "../middlewares/errorHandler";
import { hash } from "../utils/password";
import prisma from "@/config/database";

interface CreateUserInput {
  email: string;
  password: string;
  name?: string;
}

export class UserService {
  static async createUser(data: CreateUserInput): Promise<User> {
    const existingUser = await this.findByEmail(data.email);
    if (existingUser) {
      throw new AppError(400, "Email already exists");
    }

    const hashedPassword = await hash(data.password);

    return await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  static async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  static async findById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id },
    });
  }
}
