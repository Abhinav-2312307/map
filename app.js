const express = require("express");
const mysql = require("mysql");
const app = express();

// Set up MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "psit_college_map"
});

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Connected to MySQL database");
});

// Set up API endpoint for search functionality
app.get("/api/search", (req, res) => {
    const searchTerm = req.query.term;
    const query = `SELECT * FROM locations WHERE name LIKE '%${searchTerm}%'`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send({ error: "Internal Server Error" });
        } else {
            res.send(results);
        }
    });
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
