import express from "express";
import { Request, Response, NextFunction } from "express";
import { apiRouter } from "./Routers/apiRouter";

const app: express.Application = express();

const port: number = 3000;

app.use(express.json());

app.use("/api", apiRouter);

//global error handler
export interface ErrorObject {
  log: string;
  status: number;
  message: { err: string };
}
app.use((err: ErrorObject, req: Request, res: Response, next: NextFunction) => {
  const defautErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defautErr);
  errorObj.message.err = err.message.err;
  errorObj.log = err.log;
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`server running on port 3000`);
});