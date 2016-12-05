var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us', selected: 'contact', language: 'english' });
});

module.exports = router;
