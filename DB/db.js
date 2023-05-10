const config = require('../utils/config');

const mysql = require("mysql");

const pool = mysql.createPool({
  host: config.HOST,
  user: config.DBUSER,
  database: config.DBNAME,
  password: config.DBPASSWORD
});
module.exports = pool;
