import passport from "passport";
import passportLocal from "passport-local";
import request from "request";

// import { User, UserType } from '../models/User';
import { User } from "../entity/UserEntity";
import { Request, Response, NextFunction } from "express";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((user, done) => {
  console.log("Serialize User");
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
  console.log("DeserializeUser");
  done(null, user);
  
});


passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  User.findOne({
    where: { email: email.toLowerCase() },
  }).then((user) => {
    if (!user) {
      return done(null, false, { message: `Email ${email} not found.` });
    }
    return done(null, user);
    
  });
}));


export let isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
      return next();
    }
    //res.redirect("/login");
};