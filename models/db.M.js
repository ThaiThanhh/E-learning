const pgp = require('pg-promise')({
    capSQL : true
})
const dotenv = require("dotenv");
if (process.env.NODE_ENV === "production") {
	dotenv.config({ path: './configs/prod.env'});
} else {
	dotenv.config({ path: './configs/dev.env'});
}
const schema = 'public'
const cn = {
    user: process.env.DATABASE_USER,
	host: process.env.DATABASE_HOST,
	database: process.env.DATABASE,
	password: process.env.DATABASE_PASSWORD,
	port: process.env.DATABASE_PORT,
    max: 30
}
const db = pgp(cn)
exports.load = async tbName => {
    const table = new pgp.helpers.TableName({ table: tbName, schema: schema})
    const qStr = pgp.as.format('SELECT * FROM $1', table)
    console.log(qStr)
    try {
        const res = await db.any(qStr)
        return res
    } catch(error) {
        console.log('err')
    }
}

exports.get = async (tbName, fieldName, value) => {
    const table = new pgp.helpers.TableName({ table: tbName, schema: schema})
    const qStr = pgp.as.format(`SELECT * FROM $1 WHERE "${fieldName}"='${value}'`, table)
    console.log(qStr)
    try {
        const res = await db.any(qStr)
        return res
    } catch(error) {
        console.log('err')
    }
}

exports.add = async (tbName, entity) => {
    const table = new pgp.helpers.TableName({ table: tbName, schema: schema})
    const qStr = pgp.helpers.insert(entity, null, table) + 'RETURNING *'
    console.log(qStr)
    try {
        const res = await db.one(qStr)
        console.log('success')
        return res
    } catch(error) {
        console.log(error)
    }
}

exports.delete = async (tbName, fieldName, value) => {
    const table = new pgp.helpers.TableName({ table: tbName, schema: schema})
    const qStr = pgp.as.format(`DELETE FROM $1 WHERE "${fieldName}"='${value}'`, table)
    console.log(qStr)
    try {
        const res = await db.any(qStr)
        return res
    } catch(error) {
        console.log('err')
    }
}
