const express = require("express");
const router = express.Router();
const mysql = require("mysql"); // Using mysql2 with promises

const db = mysql.createConnection({
  host: "localhost",
  user: "myvidyaco_grank_db",
  password: "{{VVzvel7JyG",
  database: "myvidyaco_grank_db",
});

router.get("/", (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query: ", err);
      res.status(500).send("Error fetching data");
    } else {
      res.send(result);
    }
  });
});

// ------
// Define an API endpoint to get a user by ID
router.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  const query = `SELECT * FROM users WHERE id = ${userId}`;

  connection.query(query, (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
});
// ------
module.exports = router;
