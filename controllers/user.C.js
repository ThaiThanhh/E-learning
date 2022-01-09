const userM = require('../models/user.M')
exports.getInfo =  async(req, res) => {
    const userID = req.user.userid
    const user = await userM.getByID(userID)
    console.log(user)

    res.status(200).render('user-information', {
        title: 'Thông tin cá nhân',
        user: user
    })
}