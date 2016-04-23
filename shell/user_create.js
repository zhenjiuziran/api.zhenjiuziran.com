var Sequelize = require('sequelize');
var config_db = require("./config_db");

var sequelize = new Sequelize(config_db.database, config_db.username, config_db.password);


var User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
},{
  timestamps: true,
  createdAt: "time_create",
  updatedAt: "time_update",
  tableName: "users"
});

User.create({
  username:"admin",
  password:"987654"
}).then(function(user) {
  console.log(user.get({plain:true}))
});
