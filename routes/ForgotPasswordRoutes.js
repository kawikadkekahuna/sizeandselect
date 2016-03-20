(function () {
    "use strict";

    const express = require('express');
    const router = express.Router();
    const User = require('../models').User;
    const crypto = require('crypto');
    const Email = require('../emails/emails.js');
    const Promise = require('bluebird');

    function generatePwResetToken() {
        return {
            resetPasswordToken: crypto.randomBytes(25).toString('hex'),
            resetPasswordExpires: Date.now() + 3600000 // 1 hour
        };
    }

    router.put('/', function (req, res) {
        const userEmail = req.body.email;

        User.findOne({
            where: {
                email: userEmail
            }
        })
            .then(function (user) {
                if (!user) {
                    throw {status: 404, message: "No user with that email found in the system"};
                }

                return Promise.resolve(generatePwResetToken())
                    .then(function (pwResetInfo) {

                        const emailInfo = {
                            firstName: user.first_name,
                            email: user.email,
                            resetPasswordToken: pwResetInfo.resetPasswordToken
                        };

                        Email.sendResetPasswordToken(emailInfo);

                        return user.update({
                            reset_password_token: pwResetInfo.resetPasswordToken,
                            reset_password_expires: pwResetInfo.resetPasswordExpires
                        }, {
                            fields: ['reset_password_token', 'reset_password_expires']
                        });

                    });
            })
            .then(function () {
                res.sendStatus(200);
            });
    });


    module.exports = router;
}());