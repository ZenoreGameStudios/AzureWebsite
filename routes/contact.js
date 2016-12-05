var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contacta con Nosotros', selected: 'contact', language: 'spanish' });
});

module.exports = router;
