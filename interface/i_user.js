var User = require("./models/user");
var md5 = require("md5");
var thunkify = require("thunkify");

var i_user = {};

var auth = function(username,password,callback) {
    console.log(username,password);
    User.findOne({
      where: {
        username: username,
        password: md5(password)
      }
    }).then(function(user) {
      console.log(user);
      callback(null,user);
    },function() {
      callback(101);
      console.log("Not found user");
    });
}

i_user.auth = thunkify(auth);

module.exports = i_user;
