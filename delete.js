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
	// Delete From
	var sql = "DELETE FROM customers WHERE id = 4";	
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log(result);
	});
});
