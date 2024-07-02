var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "myvidyaco_grank_db",
  password: "{{VVzvel7JyG",
  database: "myvidyaco_grank_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("Error Connecting: " + err.stack);
    return;
  }
  // console.log("Connected as id " + connection.threadId);
  console.log("Connected to Grank Server");
});
