const database = require('./db.M')
const tbName = 'account'
const idFieldName = 'username'
module.exports = {
    all: async () => {
        const res = await database.db.any('SELECT * FROM "public"."course" C JOIN "public"."USER" U ON C.userid = U.userid')
        console.log(res)
        return res
    },
    get: async userName => {
        const res = await db.get(tbName,idFieldName, userName)
        if (res.length > 0) {
            return res[0]
        }

        return res
    },
    getByID: async userID => {
        const res = await db.get(tbName,'userid',userID)
        if (res.length > 0) {
            return res[0]
        }

        return res
    },
}