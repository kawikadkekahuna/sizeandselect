(function () {
    "use strict";
    const jwt = require('jsonwebtoken')

    const verify = function (req, res, next) {
      jwt.verify(req.headers.authorization, 'sushisecret', function (err, decoded){
        if(decoded){
          next();
        }else{
          res.json({
            error:'Unauthorized',
            status: 401,
            message:'Invalid or expired access token.'
          });
        };
      });
    };

    module.exports = {
        verify
    }
}());