// v1/controllers/user.route.js

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
  const query = "SELECT * FROM googleworkspace";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query: ", err);
      res.status(500).send("Error fetching data");
    } else {
      res.send(result);
    }
  });
});

// Route: GET /api/v1/users/:id
router.get("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const [rows] = await req.mysql.query(
      "SELECT * FROM googleworkspace WHERE id = ?",
      [userId]
    );

    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route: POST /api/v1/users
router.post("/", async (req, res) => {
  const { username, email } = req.body;

  try {
    const result = await req.mysql.query(
      "INSERT INTO googleworkspace (username, email) VALUES (?, ?)",
      [username, email]
    );
    const userId = result[0].insertId;

    res.status(201).json({ id: userId, username, email });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route: PUT /api/v1/users/:id
router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;

  try {
    const result = await req.mysql.query(
      "UPDATE googleworkspace SET username = ?, email = ? WHERE id = ?",
      [username, email, userId]
    );

    if (result[0].affectedRows > 0) {
      res.status(200).send("User updated successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route: DELETE /api/v1/users/:id
router.delete("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await req.mysql.query(
      "DELETE FROM googleworkspace WHERE id = ?",
      [userId]
    );

    if (result[0].affectedRows > 0) {
      res.status(200).send("User deleted successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
