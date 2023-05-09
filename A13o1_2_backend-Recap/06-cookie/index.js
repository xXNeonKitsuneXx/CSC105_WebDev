const express = require("express");
const mysql = require("mysql2");
const cookieParser = require("cookie-parser");

const connection = mysql.createConnection({
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_12eyur",
	password: "DRL1EsqIgnmfEn8c",
	database: "lab_todo02_125eedk",
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
    } else {
        console.log("Database is connected");
    }
});

// Export connection to use in other files
global.connection = connection;

// Create express app
const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

app.use(cookieParser());

// Register endpoints
app.post("/login", require("./endpoint_login"));
app.post("/register", require("./endpoint_register"));
app.get("/check", require("./endpoint_check_login"));
app.get("/todo/all", require("./endpoint_get_all_todos"));

//////////////////////////////////////////////////////////////////////
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
