const database = require('./db.M')
const tbName = 'course'
const idFieldName = 'username'
module.exports = {
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