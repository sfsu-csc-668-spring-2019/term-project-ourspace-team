import {Response, Request, NextFunction } from "express";
import { User } from "../entity/UserEntity";
import { UserRepo } from "../repository/user-repository"

import "reflect-metadata";


export let saveNewUser = (req: Request, res: Response, next: NextFunction) => {
    let userRepo : UserRepo = new UserRepo();

    console.log("Received Save User => POST");
    console.log(req.body.username, req.body.password, req.body.email, req.body.name);
    //let errormessage = JSON.stringify({error: "User Exists Already!"});
    //res.send(errormessage);

    //check if user exists: YES -> Send error back  || NO -> create and save new user with encryption

    if (userRepo.doesUserAlreadyExist(req.body.username) == true){
        console.log("User does exist, send error!");
        res.send("ERROR USERNAME EXISTS");
    } else {
        console.log("Username does not exist: Add user!");
        let newUser:User = new User();
        newUser.name = req.body.name;
        newUser.password = req.body.password;
        newUser.email = req.body.email;
        newUser.username = req.body.username;

        userRepo.saveUser(newUser).then((result: any) => {
            console.log("Result: " + result);
            res.send(result);
        });
    }
}