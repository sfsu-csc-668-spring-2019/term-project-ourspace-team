import { Response, Request, NextFunction, response } from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository"
import * as bcrypt from 'bcryptjs';

import "reflect-metadata";
import passport from "passport";
import { doesNotReject } from "assert";

export let tryToLogin = async (req: Request, res: Response, next: NextFunction) => {
    let userRepo: UserRepo = new UserRepo();
    const userName: string = req.body.username;
    const userEmail: string = req.body.email;
    const passWord: any = req.body.password;
    const name: string = req.body.name;

    console.log("Try to login");
    const user = await userRepo.doesUserAlreadyExist(userName, userEmail);

    if (user.length != 0) {
        console.log('User exists');
        if (userName === user[0].username) {
            const match = await bcrypt.compare(passWord, user[0].password);
            console.log(match);
            if (match === true) {
                //response.send('logged in');
                console.log('logged in');
                req.login(user[0].id, function(err) {
                    //redirected to user login
                    console.log("login user passport");
                });
            }

            if (!match) {
                //response.send('login failed');
                console.log('login failed');
            }
        }
    } else {
        //response.send('User not found');
        console.log('User not found');
    }

}

passport.serializeUser(function(user_id, done){
    done(null, user_id);
});

passport.deserializeUser(function(user_id, done){
    // User.find({id: user_id}){
    //     done(null, user_id);
    // };
    done(null, user_id);
});