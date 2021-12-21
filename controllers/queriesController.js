async function findById(id) {
	await pool.query('SELECT password FROM users WHERE email = $1', [email], (error, result) => {
		if (error) {
			return error
		}
		res = result.rows
	})
}

const dotenv = require("dotenv");
const pgPool = require("pg").Pool;
if (process.env.NODE_ENV === "production") {
	dotenv.config({ path: './configs/prod.env'});
} else {
	dotenv.config({ path: './configs/dev.env'});
}
const pool = new pgPool ({
	user: process.env.DATABASE_USER,
	host: process.env.DATABASE_HOST,
	database: process.env.DATABASE,
	password: process.env.DATABASE_PASSWORD,
	port: process.env.DATABASE_PORT,
})

async function login (email) {
	let res;
	await pool.query('SELECT password FROM users WHERE email = $1', [email], (error, result) => {
		if (error) {
			return error
		}
		 res = result.rows
	})
	return JSON.stringify(res)
}

// const signup = (user) => {
// 	// pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
// 		if (error) {
// 			throw error
// 		}
// 		res.status(201).send(`User added with ID: ${results.insertId}`)
// 	})
// }

// const updateUser = (req, res) => {
// 	const id = parseInt(req.params.id)
// 	const { name, email } = req.body
//
// 	pool.query(
// 		'UPDATE users SET name = $1, email = $2 WHERE id = $3',
// 		[name, email, id],
// 		(error, results) => {
// 			if (error) {
// 				throw error
// 			}
// 			res.status(200).send(`User modified with ID: ${id}`)
// 		}
// 	)
// }
//
// const deleteUser = (req, res) => {
// 	const id = parseInt(req.params.id)
//
// 	pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
// 		if (error) {
// 			throw error
// 		}
// 		res.status(200).send(`User deleted with ID: ${id}`)
// 	})
// }

module.exports = {
	login,
	findById,
}
