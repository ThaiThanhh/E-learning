const accM = require("../models/account.M");
const session = require("express-session");
const saltRounds = 10;
const passport = require('passport')

exports.getSignin = (req, res) => {
    if (req.user) {
      return res.redirect('/')
    }
    res.status(200).render("login-2",{
      title: 'Login',
      layout: false
    });
}

exports.login = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return res.status(200).render("login-2",{
          title: 'Login',
          layout: false,
          notify: err
        });
        
      }
      if (!user) {
        return res.status(200).render("login-2",{
          title: 'Login',
          layout: false,
          notify: 'Sai tên đăng nhập hoặc mật khẩu!'
        });
        
      }
      req.logIn(user, function(err) {
        if (err) {
          return res.status(200).render("login-2",{
            title: 'Login',
            layout: false,
            notify: err
          });
        }
        return res.redirect('/')
      })
    }) (req, res, next)
}

exports.logOut = async(req, res) => {
  if (req.user) {
    req.logOut()
  }
  res.redirect('/signin')
}