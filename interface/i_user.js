var User = require("./models/user");
var md5 = require("md5");
var i_user = {
  auth: function(username,password) {
    console.log(username,password);
    User.findOne({
      where: {
        username: username,
        password: md5(password)
      }
    }).then(function(user) {
      console.log(user);
    });
  }
}

module.exports = i_user;
