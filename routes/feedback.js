var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('feedback', { title: 'Mándanos tu opinión', selected: 'feedback', language: 'spanish' });
});

module.exports = router;
