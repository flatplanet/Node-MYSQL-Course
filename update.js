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
	// Update Record
	var sql = "UPDATE customers SET name = 'John Elder' WHERE id = 1";	
	//var sql = "select * FROM customers";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
