/*jslint es6, node: true */

(function () {
    "use strict";

    const moment = require('moment');
    const mgApiKey = require('../config/.apiKeys.js').mailgun;
    const mg = require('mailgun.js');
    const mailgun = mg.client({
        username: 'api',
        key: mgApiKey.key
    });
    const domain = mgApiKey.domain;
    const EmailTemplate = require('email-templates').EmailTemplate;
    const path = require('path');
    const templatesDir = path.resolve(__dirname, '..', 'emails/templates');
    const DATE_RFC2822 = "ddd, DD MMM YYYY HH:mm:ss ZZ";

    function buildEmail(emailType, locals) {
        const template = new EmailTemplate(path.join(templatesDir, emailType));
        return template.render(locals);
    }

    function sendEmail(emailType, locals, subject) {
        const
            from = locals.from || `Size and Select <info@sizeandselect.com>`,
            to = [locals.email],
            deliveryTime = locals.deliveryTime || moment(),
            formattedDeliveryTime = deliveryTime.format(DATE_RFC2822);

        buildEmail(emailType, locals)
            .then(function (emailBuildResults) {
                const html = emailBuildResults.html;
                return mailgun.messages.create(domain, {
                    from: from,
                    to: to,
                    subject: subject,
                    html: html,
                    "o:deliverytime": formattedDeliveryTime
                });
            })
            .then(function () {
                console.log('An email has been sent with the following details', {from, to, subject});
            })
            .catch(function (err) {
                console.error(`There was an error with sending an email to ${to}:`, err);
                throw {status: 500, message: "There was an error with sending an email"};
            });
    }

    function sendResetPasswordToken(user) {
        const
            emailType = 'reset-password-token',
            subject = '',
            locals = {
                firstName: user.firstName,
                email: user.email,
                resetPasswordToken: user.resetPasswordToken
            };

        sendEmail(emailType, locals, subject);
    }

    module.exports = {
        sendResetPasswordToken

    };

}());