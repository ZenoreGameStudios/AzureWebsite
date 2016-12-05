var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('aboutUs', { title: 'About Us', selected: 'aboutUs', language: 'english' });
});

module.exports = router;
