var Sequelize = require('sequelize');
var md5 = require("md5");

var config_db = require("./config_db");

var sequelize = new Sequelize(config_db.database, config_db.username, config_db.password,{
  host: config_db.host,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


var User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
},{
  timestamps: true,
  createdAt: "time_create",
  updatedAt: "time_update",
  tableName: "users"
});

User.findOne({
  where: {
    username: "admin"
  }
}).then(function(user) {
  console.log(user.get({
    plain:true
  }))
});

//
// User.create({
//   username:"admin",
//   password:"987654"
// }).then(function(user) {
//   console.log(user.get({plain:true}))
// });
