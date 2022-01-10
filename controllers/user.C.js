const userM = require('../models/user.M')
exports.getInfo =  async(req, res) => {
    const userR = req.user
    if (!userR) {
        return res.redirect('/signin')
    }
    const user = await userM.getByID(userR.userid)
    res.status(200).render('user-information', {
        title: 'Thông tin cá nhân',
        user: user
    })
}