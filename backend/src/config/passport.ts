import passport from "passport";
import passportLocal from "passport-local";
import request from "request";

// import { User, UserType } from '../models/User';
import { User } from "../entity/UserEntity";
import { Request, Response, NextFunction } from "express";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((user, done) => {
  console.log("Serialize User");
  done(undefined, user);
});

passport.deserializeUser((user, done) => {

// let user = User.find({
//   where: [ 
//     {username: username}
//   ]
//   }).then((user) => {
//     console.log(user);
//   })
  console.log("DeserializeUser");
  done(null, user);
  
});


passport.use(new LocalStrategy(function (username, password, done) {
  console.log("inner passport");
  User.findOne({
    where: { username: username },
  }).then((user) => {
    if (!user) {
      return done(null, false, { message: `Email ${username} not found.` });
    }
    console.log("user is going to be passed");
    return done(null, user);
  });
}));


export let isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
      return next();
    }
    //res.redirect("/login");
};