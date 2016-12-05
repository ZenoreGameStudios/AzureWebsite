var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Nuestros Proyectos', selected: 'projects', language: 'spanish' });
});

module.exports = router;
