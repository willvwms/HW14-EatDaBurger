// Import the connection.js file:
var connection = require("./connection.js");

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// function selectAll()
// {
//   var query = connection.query(
//     "SELECT * FROM burgers",
//     function(err, res) {
//       // // Call updateProduct AFTER the INSERT completes
//       // updateProduct();

//       console.log(res);
//     });
// } // closes selectAll function definition

// function insertOne(flavor) 
// {
//   console.log("Inserting a new burger...\n");

//     connection.query("INSERT INTO burgers (burger_name) VALUES (?)", flavor, function(err, result) {
//     if (err) 
// 	    {
// 	      throw err;
// 	    }
// 	});
//   // var query = connection.query(
// 	 //    "INSERT INTO burgers VALUES ?",
// 	 //    {
// 	 //      burger_name: flavor
// 	 //    },
// 	 //    function(err, res) {
// 	 //    	console.log(res);
// 	 //      // console.log("Successfully updated " + res.affectedRows + "row(s). " + flavor + "-flavored burger added!");
// 	 //      // // Call updateProduct AFTER the INSERT completes
// 	 //      // updateProduct();
// 	 //    }
// 	 //  );

//   // // logs the actual query being run
//   // console.log(query.sql);
// } // closes insertOne function definition


// function updateOne(identifier) 
// {

//   connection.query("UPDATE burgers SET devoured = true WHERE id = ?", identifier, function(err, result) {
//     if (err) {
//       throw err;
//     }

//     // res.redirect("/");
//   });

//   // // logs the actual query being run
//   // console.log(query.sql);
// } // closes updateOne function definition

var orm = {

selectAll: function ()
{
  var query = connection.query(
    "SELECT * FROM burgers",
    function(err, res) {
      // // Call updateProduct AFTER the INSERT completes
      // updateProduct();

      console.log(res);
    });
}, // closes selectAll function definition

insertOne: function (flavor) 
{
  console.log("Inserting a new burger...\n");

    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", flavor, function(err, result) {
    if (err) 
	    {
	      throw err;
	    }
	});
}, // closes insertOne function definition


updateOne: function (identifier) 
{
  connection.query("UPDATE burgers SET devoured = true WHERE id = ?", identifier, function(err, result) {
    if (err) 
    {
      throw err;
    }

    // res.redirect("/");
  });
} // closes updateOne function definition

}; // closes orm object definition

module.exports = orm;