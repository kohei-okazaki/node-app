const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

// +++ TODO 削除 +++ 
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// +++ TODO 削除 +++ 

const loginRouter = require('./routes/login');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'kintai web app',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 60 * 1000 }
}));

// ※以下のようなRequestに対応するapp.useの前にライブラリの読み込みや利用の記述を記載すること
// +++ TODO 削除 +++ 
app.use('/kin-dashboard/index', indexRouter);
app.use('/kin-dashboard/users', usersRouter);
// +++ TODO 削除 +++ 

app.use('/kin-dashboard/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log("req.url=" + req.url);
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
