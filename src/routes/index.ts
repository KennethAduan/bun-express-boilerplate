import { test } from "@/controllers";
import { Router } from "express";

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

apiRouter.get("/test", test);

export default apiRouter;
