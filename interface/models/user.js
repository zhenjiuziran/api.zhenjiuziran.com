var config_db = require("../../shell/config_db");
var Sequelize = require('sequelize');

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

module.exports = User;
