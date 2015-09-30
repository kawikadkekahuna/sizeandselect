'use strict';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../models').User

/**
 * GET /:id
 * @return [JSON {} eg:]
 *
 * {
 * user_picture:'',
 * first_name:,
 * last_name:,
 * account_type:,
 * email:,
 * phone:,
 * company:,
 * address:,
 * city:,
 * zipcode,
 * country
 * }
 */

router.get('/:id', function (req,res) {
  var id = req.params.id

  User.findOne({
    where:{
      id: id
    }
  }).then(function(user){
    res.jsonp(user);
  })

});


module.exports = router;