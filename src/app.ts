import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorhandler from './app/middleware/globalErrorHandler';


const app: Application = express();

// parsar
app.use(express.json());
app.use(cors());


// application routes
app.use('/api/v1', router);

const getAController =  (req: Request, res: Response) => {
  res.send("i love you allah");
}

app.get('/', getAController);

// error handle 
app.use(globalErrorhandler)

export default app;
