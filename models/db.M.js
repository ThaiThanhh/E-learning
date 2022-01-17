const pgp = require('pg-promise')({
    capSQL : true
})
const dotenv = require("dotenv");
const { Pool } = require('pg');
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
exports.update = async (tbName, fieldUpd, fieldName, value, upd) => {
    const dataSingle = {role: upd}
    const table = new pgp.helpers.TableName({ table: tbName, schema: schema})
    const condition = pgp.as.format(` WHERE "${fieldName}"=${value}`)
    const qStr = pgp.helpers.update(dataSingle, ['role'], table) + condition + 'RETURNING *';
    console.log(qStr)
    try {
        const res = await db.any(qStr)
        console.log('res=', res)
        return res
    } catch(error) {
        console.log(error)
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
exports.getCourses = async () => {
    try {
        const res = await db.any('SELECT * FROM "public"."course" C JOIN "public"."USER" U ON C.userid = U.userid')
        return res
    } catch(error) {
        console.log('Lỗi khóa học',err)
    }
}
exports.getCourseByID = async (id) => {
    try {
        const res = await db.one(`SELECT *, to_char(C."startdate", \'DD/MM/YYYY\') as startdatee, to_char(C."enddate", \'DD/MM/YYYY\') as enddatee  FROM "public"."course" C JOIN "public"."USER" U ON C.userid = U.userid WHERE C.courseid = ${id}`)
        return res
    } catch(error) {
        console.log('Lỗi khóa học',err)
    }
}
exports.getReviews = async (courseId) => {
    try {
        const res = await db.any(`SELECT *,to_char(r."updated_at", \'DD/MM/YYYY\') as reviewTime FROM "public".review r join "public"."USER" u on r.userid = u.userid where r.courseid = ${courseId}`)
        return res
    } catch(error) {
        console.log('Lỗi review hic',err)
    }
}

exports.getUserInfo = async (userid) => {
    try {
        const res = await db.one(`SELECT * FROM "public"."USER" u left JOIN
        teacher t on u.userid = t.userid
        WHERE u.userid = ${userid}`)
        return res
    } catch(error) {
        console.log('Lỗi review hic',err)
    }
}

exports.getCoursesOfTeacher = async (userid) => {
    try {
        const res = await db.any(`SELECT * FROM COURSE C JOIN "public"."USER" U 
        ON C.userid = U.userid
        WHERE C.userid = ${userid}`)
        return res
    } catch(error) {
        console.log('Lỗi review hic',error)
    }
}

