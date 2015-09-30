'use strict';
/*  Middleware to combine all routes. */
var express = require('express');
var router = express.Router();

//judah start

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var bcrypt = require('bcrypt');
var csurf = require('csurf');
var async = require('async');
var crypto = require('crypto');

var db = require('../models');
var User = db.User;

db.sequelize.sync();


function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login')
}

function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(11))
}


function createUser (email, password) {
  User.create({
    email : email,
    password : generateHash(password)
  });
}

function validatePassword (password){
  return bcrypt.compareSync(password, user.password)
}


router.get('/', ensureAuthenticated,
  function (req, res) {
    res.render("secret");
  });


router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));


router.get('/login',function (req, res) {
  res.render("login", {
    message : req.flash('error'),
    csrfToken: req.csrfToken()
  });
});

router.get('/logout', function (req, res){
  req.logout();
  res.redirect("/login");
});

router.get('/register',function (req, res) {
  res.render("register", {csrfToken: req.csrfToken()});
});


router.post('/register', function (req, res){
  User.find({
    where: {email : req.body.email}
  }).then(function (user){
    if (user){
      //user exists
      res.render("register");
    }else{
      createUser(req.body.email, req.body.password);
      res.redirect("/login");
    }
  })
})

router.get('/forgot', function (req, res){
  res.render('forgot', {csrfToken: req.csrfToken()});
});

router.post('/forgot', function (req, res, next) {
  async.waterfall([
    function (done) {
      crypto.randomBytes(20, function (err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function (token, done) {
      User.findOne({
        where : {email: req.body.email}
      }), function (err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        // user.save(function(err) {
        //   done(err, token, user);
        // });
      };
    },
    function (token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        port: 1025,
        ignoreTLS: true,
      });
      var mailOptions = {
        // to: user.email,
        to: 'judah.lamm@gmail.com',
        from: 'judah.lamm@gmail.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});



router.get('/reset/:token', function(req, res) {
  //cahnge to sequelize
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/forgot');
    }
    res.render('reset', {
      user: req.user
    });
  });
});


router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          req.flash('error', 'Password reset token is invalid or has expired.');
          return res.redirect('back');
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        user.save(function(err) {
          req.logIn(user, function(err) {
            done(err, user);
          });
        });
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport({
        port: 1025,
        ignoreTLS: true,
      });
      var mailOptions = {
        to: user.email,
        from: 'passwordreset@demo.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('success', 'Success! Your password has been changed.');
        done(err);
      });
    }
  ], function(err) {
    res.redirect('/');
  });
});





//judah end




module.exports = router;