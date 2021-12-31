const accM = require("../models/account.M");
const session = require("express-session");
const saltRounds = 10;
const passport = require('passport')

exports.getSignin = (req, res) => {
    res.status(200).render("login-2",{
      title: 'Login',
      layout: false
    });
}

exports.login = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        // console.log('1')
        return
      }
      console.log(user)
      if (!user) {
        console.log('lỗi')
        return
      }
      req.logIn(user, function(err) {
        if (err) {
          console.log('err')
          console.log(err)
          return
        }
        
        return res.redirect('/')
      })
    }) (req, res, next)
}
