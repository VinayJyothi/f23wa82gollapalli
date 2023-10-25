var express = require('express');
var router = express.Router();
var a;
var b;
var pow;
var sign;
var tanh;
var trunc;

/* GET users listing. */
router.get('/computation', function(req, res, next) {
    router.put(b=Math.random());
    router.put(a=Math.floor(b));
    router.post(pow=Math.pow(a));
    router.post(sign=Math.sign(a));
    router.post(tanh=Math.tanh(a));
    router.post(trunc=Math.trunc(a));
   
    res.send('pow applied to '+a+' is '+pow + ' \n sign applied to '+a+' is '+sign+ 'tanh applied to '+a+' is '+tanh+ 'trunc applied to '+a+' is '+trunc) ;
    //res.send(`${result} applied to  ${randomValue} is ${cs}`);
});
/*app.get('/Computation', function(req,res,next){
  res.send();
})*/

module.exports = router;
//module.exports = app;
