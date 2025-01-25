import { User } from "@prisma/client";

import { AppError } from "../middlewares/errorHandler";
import { hash } from "../utils/password";
import prisma from "@/config/database";
import { EmailService } from "./email.service";

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

    const user = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    // Send welcome email
    await EmailService.sendWelcomeEmail(user.email, user.name ?? undefined);

    return user;
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
