import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(4000,() => {
  console.log(`[server]: Server is running at http://localhost:4000`);
});

app.use(cors())
