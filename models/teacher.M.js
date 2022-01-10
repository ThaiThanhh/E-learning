const db = require('./db.M')
const tbName = 'teacher'
const idFieldName = 'userid'
module.exports = {
    all: async () => {
        const res = await db.load(tbName)
        return res
    },
    get: async userID => {
        const res = await db.get(tbName,idFieldName, userID)
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
    add: async user => {
        const res = await db.add(tbName, user)
        return res
    },
    delete: async userName => {
        const res = await db.delete(tbName,idFieldName, userName)
        return res

    },
}