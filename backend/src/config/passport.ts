import passport from "passport";
import passportLocal from "passport-local";

// import { User, UserType } from '../models/User';
import { User } from "../entity/UserEntity";
import { Request, Response, NextFunction } from "express";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((user, done) => {
  done(undefined, user.id);
});

passport.deserializeUser((id, done) => {

let user = User.find({
  where: [ 
    {id: id}
  ]
  }).then((user) => {
    console.log(user);
  })
  done(null, user);
  
});


export let isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
      return next();
    }
    //res.redirect("/login");
};