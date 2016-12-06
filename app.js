var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var indexEn = require('./routes/indexEn');
var projects = require('./routes/projects');
var projectsEn = require('./routes/projectsEn');
var aboutUs = require('./routes/aboutUs');
var aboutUsEn = require('./routes/aboutUsEn');
var contact = require('./routes/contact');
var contactEn = require('./routes/contactEn');
var feedback = require('./routes/feedback');
var feedbackEn = require('./routes/feedbackEn');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/index', index);
app.use('/indexEn', indexEn);
app.use('/projects', projects);
app.use('/projectsEn', projectsEn);
app.use('/aboutUs', aboutUs);
app.use('/aboutUsEn', aboutUsEn);
app.use('/contact', contact);
app.use('/contactEn', contactEn);
app.use('/feedback', feedback);
app.use('/feedbackEn', feedbackEn);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
