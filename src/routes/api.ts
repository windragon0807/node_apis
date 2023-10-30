import express, { Response } from "express";
import path from "path";

const router = express.Router();

router.get("/css", (_, res: Response) => {
  res.sendFile(path.join(process.cwd(), "/public/assets/css/oopy.css"));
});

export default router;
