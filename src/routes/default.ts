import express, { Response } from "express";

const router = express.Router();

router.get("/", (_, res: Response) => {
  res.status(200).send("Hello World");
});

export default router;
