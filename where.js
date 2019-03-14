var mysql = require('mysql');

// Create A Connection
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodedb",

})


// Connect To MySQL
con.connect(function(err) {
	if (err) throw err;
	console.log("Connected To The Database!");
	// Where Clause 
	var name_search = 't%';
	var id_search = 1;
	var sql = "SELECT * FROM customers WHERE name LIKE ? or id = ?";	
	con.query(sql, [name_search, id_search], function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});
