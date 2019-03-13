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
	
	// Insert Into 
	var sql = "INSERT INTO customers (name, email) VALUES ?";
	var values = [
		['Tim', 'tim@tim.com'],
		['Tina', 'tina@tina.com'],
		['Laura', 'laura@laura.com'],
	]
	con.query(sql, [values], function (err, result) {
		if (err) throw err;
		console.log("Records Inserted: " + result.affectedRows);
	});
});
