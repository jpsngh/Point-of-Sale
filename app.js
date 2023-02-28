
import express from "express"
import path  from 'path';

import logger from 'morgan';
import bodyParser from "body-parser";
import cors from  "cors"
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import "colors"
import dotenv from "dotenv"
import db from "./dbconfig.js";
import billRouter from './routes/bills.js';
dotenv.config();
var app = express();


app.use(logger('dev'));


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config()


app.use('/api/items', indexRouter);
app.use('/auth', usersRouter);
app.use("/billing",billRouter);

db();

app.listen(process.env.PORT || 8000,()=>{
  console.log("Server is running on port 8000".bgCyan.bold);
});
export default app;
