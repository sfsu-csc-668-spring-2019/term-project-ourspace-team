import passport from "passport";
import passportLocal from "passport-local";

import { User } from "../entity/UserEntity";
import { Request, Response, NextFunction } from "express";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((user, done) => {
  done(undefined, user);
});


passport.deserializeUser((user, done) => {
  done(null, user);
});

//Unused
passport.use(new LocalStrategy(function (username, password, done) {
  User.findOne({
    where: { 
      username: username 
    }
  }).then((user) => {
    if (!user) {
      return done(null, false, { message: `Email ${username} not found.` });
    } else {
      return done(null, user);
    }
  });
}));


export let isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  } 
  res.redirect("/");
};