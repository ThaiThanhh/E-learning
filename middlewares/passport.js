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
          console.log(account)
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

  passport.serializeUser(function (account, done) {
    done(null, account);
  });

  passport.deserializeUser(async function (account, done) {
    try {
      const acc = await accM.get(account.username);
      done(null, acc)
    } catch (error) {
      done(new Error("error"), null);
    }
  });
  app.use(passport.initialize());
  app.use(passport.session());
};
