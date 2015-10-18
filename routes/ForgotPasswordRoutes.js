'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models').User;
var crypto = require('crypto');
var apiKeysFile = require('../../config/.apiKeys');
var mailgunApiKey = apiKeysFile.mailgun;
var domain = 'sandboxeb3a33eecb81490b8b2d70a6cf832d5e.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: mailgunApiKey, domain: domain});




/**
 * [POST]
 * [If user successfully logins]
 * send status 200 eg:
 * res.status(200).send(..{}..)
 * Add Bearer token to Headers.
 *
 * [If user unsuccessfuly tried to sign in]
 * Send status 401 eg:
 * res.status(401).send({error:'Unauthorized',status:'401',message:'Invalid credentials'})
 *
 */

 // router.post('/login', passport.authenticate('local', {
 //   successRedirect: '/',
 //   failureRedirect: '/login',
 //   failureFlash : true
 // }));

// router.post('/', function (req, res, next) {

//   passport.authenticate('local', function (err, user, info) {
//     if (err) {
//       return next(err);
//     }
//     if (user === false) {
//       res.status(401).send(info.message);
//     } else {
//       res.status(200).send({message:'success',status:200});
//     }
//   })(req, res, next);
// });


router.put('/forgot-password', function (req, res) {
    User.find({
        where: {email : req.body.email}
    }).then(function (user) {
        if (!user) {

            //need to have an alert be sent to user that email is not in system

            res.status({status : 200}).send(false);
        } else {
            var pwResetInfo = {
                reset_password_token : crypto.randomBytes(25).toString('hex'),
                reset_password_expires : Date.now() + 3600000 // 1 hour
            },
                data = {
                    from: 'Size & Select Team <info@' + domain + '>',
                    to: user.email,
                    subject: 'Forgot Password',
                    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                              'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                              'http://' + req.headers.host + '/reset-password/' + pwResetInfo.reset_password_token + '\n\n' +
                              'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                };

            mailgun.messages().send(data, function (error, body) {
                if (error) {

                    //throw error

                    console.log("email pw error", error);
                    res.status({status : 200}).send(false);

                } else {
                    //update user account
                    user.update({
                        reset_password_token : pwResetInfo.reset_password_token,
                        reset_password_expires : pwResetInfo.reset_password_expires
                    }, {
                        fields : ['reset_password_token', 'reset_password_expires']
                    });

                //either show the forgot page that says check email
                //or show a alert/message that says check email

                    res.send(200);
                }
            });
        }
    });
});



module.exports = router;