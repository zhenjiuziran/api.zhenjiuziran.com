var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login/:username/:password',function(req,res,next) {
  console.log(req.params.username);
  console.log(req.params.password);
});
module.exports = router;
