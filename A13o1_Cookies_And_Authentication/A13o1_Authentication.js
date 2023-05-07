const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const port = 3000;

const app = express();

// Configure connection
const connection = mysql.createConnection({
    host: "server2.bsthun.com",
    port: "6105",
    user: "lab_1crbvd",
    password: "W7qNs6r3poAH4kQy",
    database: "lab_todo02_1c5psaq",
});

// Middleware to parse JSON request body
app.use(express.json());

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
    } else {
        console.log("Database is connected");
    }
});

// Define the login endpoint
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Retrieve the hashed password for the given username from the database
    const sql = "SELECT * FROM users WHERE username = ?";
    connection.query(sql, [username], (err, rows) => {
        if (err) {
            return res.json({
                success: false,
                error: err.message,
            });
        }

        const numRows = rows.length;
        if (numRows != 0) {
            // Verify the password
            const hashedPassword = rows[0].hashed_password;
            bcrypt.compare(password, hashedPassword, (err, result) => {
                if (err) {
                    return res.json({
                        success: false,
                        error: err.message,
                    });
                }

                if (result) {
                    // Check password. If valid, respond with a successful message.
                    return res.json({
                        success: true,
                        message: "Login Successful",
                        user: {
                            id: rows[0].id,
                            username: rows[0].username,
                        },
                    });
                } else {
                    // Check password. If invalid, respond with an error message.
                    return res.json({
                        success: false,
                        message: "Invalid Password",
                    });
                }
            });
        } else {
            // Check username. If invalid, respond with an error message.
            return res.json({
                success: false,
                message: "Invalid Username",
            });
        }
    });
});

function validatePassword(password) {
    const lengthPassword = password.length >= 8;
    const ALOUpperCasePassword = /[A-Z]/.test(password);
    const ALOLowerCasePassword = /[a-z]/.test(password);
    const ALONumberPassword = /\d/.test(password);

    return lengthPassword && ALOUpperCasePassword && ALOLowerCasePassword && ALONumberPassword;
}

const saltRounds = 10;

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!validatePassword(password)) {
        return res.json({
            success: false,
            message: "Password does not meet the required conditions",
        });
    }

    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }

        const sql = "INSERT INTO users (username, password, hashed_password) VALUES (?, ?, ?)";
        connection.query(sql, [username, password, hashedPassword], (err, result) => {
            if (err) {
                return res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            }

            res.json({
                success: true,
                message: "Registration process is successful",
            });
        });
    });
});

//////////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});