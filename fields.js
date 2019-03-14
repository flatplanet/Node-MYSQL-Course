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
	// Fields 
	var sql = "SELECT * FROM customers";	
	con.query(sql, function (err, result, fields) {
		if (err) throw err;
		console.log(fields[0].name);
		console.log("----------------");
		console.log(result[0].name);
	});
});
