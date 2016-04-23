var Sequelize = require('sequelize');
var config_db = require("./config_db");

var sequelize = new Sequelize(config_db.database, config_db.username, config_db.password);
