//App function file
//Author: Ngoc Phuong Uyen Ho
//Student ID: 301103427
//Web App: Favourite Book List


// moddules for node and express
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// import "mongoose" - required for DB Access
import mongoose, { mongo } from 'mongoose';

// URI
import * as DBConfig from './db';

mongoose.connect(process.env.URI || DBConfig.RemoteURI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection; // alias for the mongoose connection
db.on("error", function()
{
  console.error("connection error");
});

db.once("open", function()
{
  console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});

// define routers
import index from '../Routes/index'; // top level routes
import books from '../Routes/books'; // routes for books

// Express Web App Configuration
const app = express();
export default app; // exports app as the default Object for this module

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /client
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// route redirects
app.use('/', index);
app.use('/books', books);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next: express.NextFunction) 
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
