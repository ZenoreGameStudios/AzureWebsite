var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('feedback', { title: 'Feedback', selected: 'feedback', language: 'english' });
});

module.exports = router;
