// Import and instantiate the MySQL connection to burger_db:
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burger_db"
});

// Make this available to the ORM.js file
module.exports = connection;