var express = require('express');
var router = express.Router();

/* GET My page. */
router.get('/mydata', function(req, res, next) {
  res.render('mydata', { title: 'Gollapalli Vinay Jyothi' });
});

module.exports = router;
