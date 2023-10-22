var express = require('express');
var router = express.Router();

/* GET My page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gollapalli Vinay Jyothi' });
});

module.exports = router;