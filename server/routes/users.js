/* user.js
Students's name: Arshpreet Singh
StudentID: 301174738
Date: 31 October, 2021
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
