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

exports.changeInfo = async (values, userid) => {
    try {
        const query =`UPDATE "public"."USER" SET fullname = '${values.fullname}'
        ,email = '${values.email}', address = '${values.address}', phonenumber = '${values.phoneNumber}'
        ,gender = '${values.gender}' where userid = ${userid}`
        console.log(query)
        const res = await db.one(query)
        return res
    } catch(error) {
        console.log('Lỗi hic',error)
    }
}
exports.searchCourses = async (searchText) => {
    try {
        const query =`SELECT * FROM "public"."course" C 
        JOIN "public"."USER" U ON C.userid = U.userid 
        WHERE C.coursename like '%${searchText.searchText}%'`
        console.log(query)
        const res = await db.any(query)     
        return res
    } catch(error) {
        console.log('Lỗi hic',error)
    }
}
exports.updateRoleAcc = async (userid) => {
    try {
        const query =`UPDATE "public"."account" SET role = 1
        where userid = ${userid}`
        console.log(query)
        const res = await db.one(query)
        return res
    } catch(error) {
        console.log('Lỗi hic',error)
    }
}
exports.getCoursesActive = async () => {
    try {
        const res = await db.any('SELECT * FROM "public"."course" C JOIN "public"."USER" U ON C.userid = U.userid where status = 1')
        return res
    } catch(error) {
        console.log('Lỗi khóa học',err)
    }
}
exports.updateStatusCourse = async (courseid, status) => {
    try {
        const query =`UPDATE "public"."course" SET status = ${status}
        where courseid = ${courseid}`
        console.log(query)
        const res = await db.one(query)
        return res
    } catch(error) {
        console.log('Lỗi hic',error)
    }
}

exports.addCourse = async (userid, course_name, start_date, end_date, fee, capacity, description) => {
    try {
        const query =`insert into "public"."course"(userid, coursename, startdate, enddate, fee, capacity, description, url_image) 
        values ('${userid}', '${course_name}', '${start_date}', '${end_date}', '${fee}', '${capacity}', '${description}', './img/ktnt.png')`
        console.log(query)
        const res = await db.one(query)
        return res
    } catch(error) {
        console.log('Lỗi hic',error)
    }
}