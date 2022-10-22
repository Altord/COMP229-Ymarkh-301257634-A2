/*
* FILE			    :	app.js
* PROJECT			:	COMP229 SEC 402
* PROGRAMMER		:	Yehoshya Markh
* SID               :   301257634
* DATE              :   2022-10-07
*/


// Third Party Modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

// ES Modules fix for __dirname 
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//Import Mongoose Module
import mongoose from 'mongoose';

// Configuration Module
import { MongoURI, Secret } from "../config/config.js";

// Import Router
import indexRouter from './routes/index.route.server.js';
import bizcontactsRouter from './routes/bizcontacts.route.server.js';

import { Mongoose } from "mongoose";

// Start server
const app = express();

//Complete DB config
mongoose.connect(MongoURI);
const db = mongoose.connection; 

//Listen  for connection success/error
db.on('open', ()=> console.log('Connected to DB'));
db.on('error', ()=> console.log("Error relating to MONGO"));

// setup ViewEngine EJS
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
//Looked up on the static files presentation from:  https://expressjs.com/en/starter/static-files.html
//app.use(express.static('public'));
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

// Use Routes
app.use('/', indexRouter);
app.use('/', bizcontactsRouter);

export default app;