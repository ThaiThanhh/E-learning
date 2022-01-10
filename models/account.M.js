const db = require('./db.M')
const tbName = 'account'
const idFieldName = 'username'
module.exports = {
    all: async () => {
        const res = await db.load(tbName)
        return res
    },
    get: async userName => {
        const res = await db.get(tbName,idFieldName, userName)
        if (res.length > 0) {
            return res[0]
        }

        return res
    },
    add: async account => {
        const res = await db.add(tbName, account)
        return res
    },
    delete: async userName => {
        const res = await db.delete(tbName,idFieldName, userName)
        return res

    }
}