import express, { Response } from "express";

const router = express.Router();

interface Data {
  id: number;
  name: string;
}

const Send: Data = {
  id: 0,
  name: "tests",
};

router.get("/", (_, res: Response) => {
  res.status(200).json({
    success: true,
    data: Send,
  });
});

export default router;
