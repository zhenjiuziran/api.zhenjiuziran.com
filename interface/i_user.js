var User = require("./modles/user");

var i_user = {
  auth: function(username,password) {
    console.log(username,password);
    User.findOne({
      where: {
        username: username,
        password: password
      }
    }).then(function(user) {
      console.log(user);
    });
  }
}

module.exports = i_user;
