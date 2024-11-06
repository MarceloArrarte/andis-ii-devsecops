require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var creditCardsRouter = require('./routes/credit-cards');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/credit-cards', creditCardsRouter);

app.use(function(req, res, next) {
  res.sendStatus(404);
});

// error handler
app.use(function(err, req, res, next) {
  console.error(req.originalUrl);
  console.error(err);
  res.sendStatus(500);
});

module.exports = app;
