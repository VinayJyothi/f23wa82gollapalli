var express = require('express');
var router = express.Router();
var a;
var b;
var pow;
var sign;
var tanh;
var trunc;

/* GET users listing. */
router.get('/', function(req, res, next) {
    router.put(b=Math.random()*10);
    router.put(a=Math.floor(b));
    router.post(pow=Math.pow(a));
    router.post(sign=Math.sign(a));
    router.post(tanh=Math.tanh(a));
    router.post(trunc=Math.trunc(a));
   
    res.send('pow applied to '+a+' is '+pow + ' <br> sign applied to '+a+' is '+ sign + ' <br> tanh applied to '+a+' is '+ tanh + '<br> trunc applied to '+a+' is '+trunc) ;
    
});

module.exports = router;
//module.exports = app;
