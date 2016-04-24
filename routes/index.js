var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login',function(req,res,next) {
  var i_user = require("../interface/i_user");

  console.log(req.body.username);
  console.log(req.body.password);
  // res.send(req.params);
  i_user.auth(req.body.username,req.body.password)(function(err,content) {
    if(!err) {
      res.send({code:0,msg:"login success"});
    } else {
      res.send({code:err,msg:content});
    }
  });
});
module.exports = router;
