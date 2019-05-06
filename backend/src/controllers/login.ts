import { Response, Request, NextFunction, response } from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository";
import * as bcrypt from 'bcryptjs';

import "reflect-metadata";
import passport from "passport";
import "../config/passport";
import { doesNotReject } from "assert";
import { IVerifyOptions } from "passport-local";

export class LoginObject {

    //Post /login
    async login(req: Request, res: Response, next: NextFunction) {
        let userRepo: UserRepo = new UserRepo();
        const username: string = req.body.username;
        const useremail: string = req.body.email;
        const password: any = req.body.password;
        const name: string = req.body.name;

    
      
        console.log("Try to login");
        const user = await userRepo.doesUserAlreadyExist(username, useremail);

        if (user.length != 0) {
            console.log('User exists');
            if (username === user[0].username) {
                const match = await bcrypt.compare(password, user[0].password);
                console.log(match);
                if (match === true) {
                    //response.send('logged in');
                    console.log("passport autheticate");
                    //passport.authenticate("local", {failureRedirect: '/'}), function (req, res) {
                    //passport.authenticate("local", {});
                    passport.authenticate("local", function(err, user, info){
                        console.log("inner auth");
                        console.log(err);
                        console.log(user);
                        console.log(info);
                        // handle succes or failure
                    
                    })(req,res,next); 
                    console.log(req.body);
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
}
