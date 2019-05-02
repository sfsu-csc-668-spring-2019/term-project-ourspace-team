import { Response, Request, NextFunction, response } from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository"
import * as bcrypt from 'bcryptjs';

import "reflect-metadata";

export class LoginObject {

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
                    console.log('logged in');
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