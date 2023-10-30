import express, { Response } from "express";
import path from "path";
import fs from "fs";

const router = express.Router();

const cssFiles = ["font", "index", "callout", "codeBlock", "header", "image", "page"];
const output = cssFiles
  .map((fileName) => {
    const filePath = path.join(process.cwd(), `/public/assets/css/${fileName}.css`);
    return fs.readFileSync(filePath, "utf-8");
  })
  .join("\n");

router.get("/css", (_, res: Response) => {
  res.set("Content-Type", "text/css");
  res.send(output);
});

const fontPath = path.join(process.cwd(), "/public/assets/fonts/Maplestory.woff");
router.get("/font", (_, res: Response) => {
  const stream = fs.createReadStream(fontPath);
  stream.on("open", () => {
    res.set("Content-Type", "application/font-woff");
    stream.pipe(res);
  });
  stream.on("error", (err) => {
    res.set("Content-Type", "text/plain");
    res.status(404).send("Not Found");
  });
});

export default router;
