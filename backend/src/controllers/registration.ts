import {Response, Request, NextFunction } from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository";
import * as bcrypt from 'bcryptjs';

import "reflect-metadata";

export class Registration {
    userRepo: UserRepo = undefined;

    constructor() {
        this.userRepo = new UserRepo();
    }
    
    saveNewUser({ body: { username, email, password: rawPassword, name }}: Request, res: Response, next: NextFunction) {
        console.log("Received Save User => POST");

        return this.userRepo.doesUserAlreadyExist(username, email)
            .then(_ => bcrypt.hash(rawPassword, 10))
            .then(password => this.userRepo.saveUser({ name, username, password, email } as User))
            .then(user => {
                console.log("User created");
            })
            .catch(error => {
                // handle that exception we threw
            })

        // const user = await this.userRepo.doesUserAlreadyExist(username, email);
        // if (user.length === 0){
        //     const newUser: User = new User();
        //     const hashPassword = await bcrypt.hash(password, 10);

        //     newUser.name = name;
        //     newUser.username = username;
        //     newUser.email = email;
        //     newUser.password = hashPassword;

        //     this.userRepo.saveUser(newUser)
        //     return console.log('User created!');
        // }else if (user.length > 0) {
        //     if(user[0].username == username) {
        //         return console.log(`User: ${username} is taken`);
        //     }

        //     if(user[0].email == email){
        //         return console.log(`E-mail: ${email} is taken`);
        //     }
        // } else {
        //     return console.log('something is broken');
        // }
    }
}