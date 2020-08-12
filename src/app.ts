import express, { Application } from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/main.router';
import bankRouter from './routes/bank.router';
dotenv.config();

const app: Application = express();
// app.use();

app.use('', mainRouter);
app.use('/api/v1/account', bankRouter);



export default app;