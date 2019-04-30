import {Response, Request, NextFunction } from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository";
import * as bcrypt from 'bcryptjs';

import "reflect-metadata";


export let saveNewUser = async (req: Request, res: Response, next: NextFunction) => {
    const userRepo : UserRepo = new UserRepo();

    const username: string = req.body.username;
    const email : string = req.body.email;
    const password: any = req.body.password;
    const name : string = req.body.name;

    console.log("Received Save User => POST");
    let user = await userRepo.doesUserAlreadyExist(username, email);
    console.log(user);
    if (user.length === 0){
        console.log("....it came inside the if.....")
        const newUser: User = new User();
        const hashPassword = await bcrypt.hash(password, 10);

        newUser.name = name;
        newUser.username = username;
        newUser.email = email;
        newUser.password = hashPassword;

        userRepo.saveUser(newUser)
    }else if (user.length > 0) {
        console.log("it came inside the else if!!!!!!")
        if(user[0].username == username) {
            console.log(`User: ${username} is taken`);
        }

        if(user[0].email == email){
            console.log(`E-mail: ${email} is taken`);
        }
    } else {
        console.log('something is broken');
    }
}