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
	
	var sql = "INSERT INTO customers (name, email) VALUES ('Steve', 'steve@steve.com')";	
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
