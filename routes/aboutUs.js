var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('aboutUs', { title: 'Nosotros', selected: 'aboutUs', language: 'spanish' });
});

module.exports = router;
