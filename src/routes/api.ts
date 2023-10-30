import express, { Response } from "express";
import path from "path";
import fs from "fs";

const router = express.Router();

const cssFiles = ["index", "callout", "codeBlock", "header", "image", "page"];
const output = cssFiles
  .map((fileName) => {
    const filePath = path.join(process.cwd(), `/public/assets/css/${fileName}.css`);
    return fs.readFileSync(filePath, "utf-8");
  })
  .join("\n");

router.get("/css", (_, res: Response) => {
  // res.sendFile(path.join(process.cwd(), "/public/assets/css/index.css"));
  res.set("Content-Type", "text/css");
  res.send(output);
});

const fontPath = path.join(process.cwd(), "/public/assets/fonts/Maplestory.woff");
const font = fs.readFileSync(fontPath);
router.get("/font", (_, res: Response) => {
  res.set("Content-Type", "application/octet-stream");
  res.send(font);
});

export default router;
