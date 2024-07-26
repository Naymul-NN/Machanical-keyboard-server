import express, { Application, Request, Response } from 'express';
import cors from 'cors';


const app: Application = express();

// parsar
app.use(express.json());
app.use(cors());


// application routes


const getAController =  (req: Request, res: Response) => {
  res.send("i love you allah");
}

app.get('/', getAController);

export default app;
