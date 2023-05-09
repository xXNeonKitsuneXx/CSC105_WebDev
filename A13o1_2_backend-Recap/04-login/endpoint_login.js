const mysql = require("mysql2");
const bcrypt = require("bcrypt");

module.exports = (req, res) => {
	// const username = req.body.username;
	// const password = req.body.password;
	const { username, password } = req.body;

	const sql = mysql.format("SELECT * FROM users WHERE username = ?", [username]);
	console.log("DEBUG: /basic/login => " + sql);
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}

		numRows = rows.length;
		if (numRows == 0) {
			res.json({
				success: false,
				message: "Username not found in the system",
			});
		} else {
			const valid = bcrypt.compare(password, rows[0].hashed_password);

			if (valid) {
				res.json({
					success: true,
					message: "Login credential is correct",
					user: rows[0],
				});
			} else {
				res.json({
					success: true,
					message: "Login credential is incorrect",
				});
			}
		}
	});
};
