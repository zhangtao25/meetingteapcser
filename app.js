var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var allTypesOfTeaRouter = require('./routes/allTypesOfTea');
var allTeaDetailsRouter = require('./routes/allTeaDetails');
var addGoodsRouter = require('./routes/addGoods');
var getGoodsRouter = require('./routes/getGoods');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/allTypesOfTea', allTypesOfTeaRouter);
app.use('/allTeaDetails', allTeaDetailsRouter);
app.use('/addGoods', addGoodsRouter);
app.use('/getGoods', getGoodsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
