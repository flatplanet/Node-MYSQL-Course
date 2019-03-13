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
	
	// Alter Table
	var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Our Table Has Been Altered...");
	});
});
