var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login',function(req,res,next) {
  console.log(req.body.username);
  console.log(req.body.password);
  res.send(req.params);
});
module.exports = router;
