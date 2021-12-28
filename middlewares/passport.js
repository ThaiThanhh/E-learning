var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy
const userM = require('../models/user.M')
module.exports = (app) => {
  passport.use(new LocalStrategy(
    async (username, password, done) => {
      let user
      try {
        user = await username.get(username)
        if (!user) {
          return done(null, false, {message: 'Incorrect username'})
        }
        const challengeResult = await bcrypt.compare(password, user.f_Password)
        if (!challengeResult) {
          return done(null, false, {message: 'Incorrect password'})
        }
        return done(null, user)
      } catch (error) {
        return done(error)
      }
    }
  )
    
  );
  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user)
    })
  })
}
