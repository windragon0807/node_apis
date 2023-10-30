import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import defaultRouter from "./routes/default";
import apiRouter from "./routes/api";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(morgan("tiny"));

app.use("/api", apiRouter);
app.use("/", defaultRouter);

const SERVER_PORT = 8000;
app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});
