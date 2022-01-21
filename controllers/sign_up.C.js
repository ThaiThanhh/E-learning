const accountM = require('../models/account.M')
const bcrypt = require('bcrypt');
const session = require('express-session')
const saltRounds = 12;
const userM = require('../models/user.M')
exports.getSignup = async (req, res) => {
    if (req.user) {
        res.redirect('/')
    }
    res.render('signup',{
        layout: false
    }) 
}
exports.signup = async (req, res) => {
    if (req.user) {
        res.redirect('/')
    }
    const username = req.body.username
    const psw = req.body.psw
    console.log(psw)
    const salt = Date.now().toString(16)
    let account = await accountM.get(username)
    if (account.length > 0){
        res.redirect('/signin')
        return
    }
    //init user
    let user = {
        role: 0,
        avatar: './img/thanh.jpg'
    }
    const rs = await userM.add(user)
    const hash = await bcrypt.hashSync(psw, saltRounds);
    console.log(hash)
    account = {
        username: username,
        password: hash,
        status: 1,
        role: 0,
        userid: rs.userid,
    }
    //add acc to db 
    await accountM.add(account)    
    res.redirect('./signin')
} 
    
