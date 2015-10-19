var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    console.log('logout user');
    req.logout();
    res.redirect("/login");
});

module.exports = router;