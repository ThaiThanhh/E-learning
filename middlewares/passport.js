var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const accM = require("../models/account.M");
const bcrypt = require('bcrypt')
module.exports = (app) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      async (username, password, done) => {
        let account;
        try {
          account = await accM.get(username);
  
          if (!account) {
            return done(null, false, { message: "Incorrect username" });
          }
          const challengeResult = await bcrypt.compare(
            password,
            account.password
          );
          if (!challengeResult) {
            return done(null, false, { message: "Incorrect password" });
          }
          return done(null, account);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(async function (user, done) {
    try {
      const acc = await accM.get(user.username);
      done(null, acc)
    } catch (error) {
      done(new Error("error"), null);
    }
  });
  app.use(passport.initialize());
  app.use(passport.session());
};
