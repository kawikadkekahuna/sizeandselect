'use strict';
var express = require('express');
var app = express();
var db = require('./models');
var routes = require('./routes');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models').User;
var expressJwt = require('express-jwt');
var bcrypt = require('bcrypt');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  next();
});

function localStrategy (username, password, done) {
  process.nextTick(function () {
      User.findOne({
        where: { username: username }
      }).then(function(user) {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
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

passport.use(new LocalStrategy(localStrategy));

app.use('/api', routes);

app.all('/*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
  db.sequelize.sync();
});