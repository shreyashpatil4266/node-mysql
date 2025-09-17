const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// MySQL connection
const db = mysql.createConnection({
  host: "mysql_db",   // <-- this is the container name from Docker
  user: "root",
  password: "rootpassword",
  database: "testdb"
});

// Test DB connection
db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Route
app.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).send("Error querying database");
    }
    res.json(results);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

