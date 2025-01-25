import { AppError } from "@/middlewares/errorHandler";
import { Request, Response } from "express";

export const test = (req: Request, res: Response) => {
  try {
    res.json({ message: "Hello World Test Controller" });
  } catch (error) {
    throw new AppError(500, "Internal server error");
  }
};
