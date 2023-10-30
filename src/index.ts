import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import defaultRouter from "./routes/default";
import apiRouter from "./routes/api";

const app = express();

const allowList = ["https://app.oopy.io/script", "https://ryong.oopy.io/"];
const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (allowList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
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
