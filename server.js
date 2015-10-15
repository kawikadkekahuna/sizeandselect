'use strict';

var express = require('express');
var app = express();
var db = require('./models');
var routes = require('./routes');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var session = require('express-session')
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');

// app.use(express.static('public'));
// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     httpOnly: true
//   }
// }))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

var parameters = {
  usernameField: 'email'
};

function localStrategy (email, password, done) {
  process.nextTick(function () {
      User.findOne({
        where: { email: email }
      }).then(function(user) {
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    }).catch(function (err) {
        return done(err, null);
        throw err;
      });
  });
}

passport.use(new LocalStrategy(parameters, localStrategy));


app.use('/api', routes);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
  db.sequelize.sync();
});