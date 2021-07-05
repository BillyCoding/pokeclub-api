import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import swaggerFile from "./swagger_output.json";

import "./database";
import "reflect-metadata";
import AppError from "./errors/AppError";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }
  console.error(err);
  return response
    .status(500)
    .json({ status: "error", message: "Internal server error" });
});

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const hostname = "localhost";
const port = 3333;

app.listen(port, hostname, () =>
  console.log(`\x1b[32mPOKECLUB API STARTED ON PORT ${hostname}:${port} 😎🤙`)
);
