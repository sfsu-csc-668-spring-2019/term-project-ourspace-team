import { Response, Request, NextFunction, response } from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository";
import * as bcrypt from 'bcryptjs';

import "reflect-metadata";
import passport from "passport";
import "../config/passport";
import { doesNotReject } from "assert";
import { IVerifyOptions } from "passport-local";
import request = require("request");

export class LoginController {

    //Post /login
    async login(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        let userRepo: UserRepo = new UserRepo();
        const username: string = req.body.username;
        const password: any = req.body.password;
      
        console.log("Try to login");
        const user = await userRepo.doesUserAlreadyExist(username);

        if (user.length != 0) {
            console.log('User exists');
            if (username === user[0].username) {
                const match = await bcrypt.compare(password, user[0].password);
                console.log(match);
                if (match === true) {
                    console.log("passport autheticate");
                    req.login(user[0], (err) => {
                        console.log("logging in");
                        res.send(req.user);
                    });
                }

                if (!match) {
                    res.send('login failed');
                    console.log('login failed');
                }
            }
        } else {
            res.send('User not found');
            console.log('User not found');
        }

    }

    async logout(req: Request, res: Response, next: NextFunction){
        req.logout();
        res.redirect("/");
    }

}
