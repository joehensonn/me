import logger from 'morgan';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(cors({origin: 'https://joehenson.co.uk', optionsSuccessStatus: 200}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(indexRouter);

export default app;
