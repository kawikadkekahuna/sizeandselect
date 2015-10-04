'use strict';

var express = require('express');
var router = express.Router();
var Project = require('../models').Project;
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

router.post('/create', function(req, res) {
  /**
   * Validation check is SO messy.
   * Need to refactor big time.
   */

  var keys = Object.keys(req.body);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] !== 'project_name') {
      if (keys[i] !== 'company_name') {
        if (keys[i] !== 'status') {
          console.log(keys[i]);
          res.json({
            error: 'Invalid fields',
            status: 422,
            message: 'Fields must be project_name, company_name, status'
          });
          return;
        }
      }
    }
  }

  Project.create({
    project_name: req.body.project_name,
    company_name: req.body.company_name,
    status: req.body.status
  }).then(function(project) {
    res.jsonp(project);
  });

});

function validate(data, res) {}

module.exports = router;